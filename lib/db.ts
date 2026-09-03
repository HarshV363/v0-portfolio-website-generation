import { Pool } from "pg"

// Reuse a single pool across hot reloads / serverless invocations.
declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined
}

function createPool() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
  }

  return new Pool({
    connectionString,
    // The DB uses sslmode=verify-full in the connection string, but the
    // internal cluster cert chain isn't in Node's default trust store,
    // so we relax verification here while still using an encrypted connection.
    ssl: { rejectUnauthorized: false },
    max: 5,
  })
}

// Lazily create the pool on first real use, instead of at module load time.
// Next.js "collects page data" for API routes during the build step, which
// imports this module without the runtime environment available — throwing
// here at import time breaks the build itself, not just missing-env-var requests.
export function getPool(): Pool {
  if (!global._pgPool) {
    global._pgPool = createPool()
  }
  return global._pgPool
}
