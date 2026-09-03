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

export const pool = global._pgPool ?? createPool()

if (process.env.NODE_ENV !== "production") {
  global._pgPool = pool
}
