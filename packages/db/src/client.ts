import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const createClient = () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL");
  }

  return drizzle({
    client: neon(connectionString),
    schema,
    casing: "snake_case",
  });
};

type Database = ReturnType<typeof createClient>;

let client: Database | undefined;

const getClient = (): Database => (client ??= createClient());

/**
 * Connects on first use rather than on import. Next.js loads every route module
 * while collecting page data at build time, so a module-scope connection would
 * make `DATABASE_URL` a build-time requirement for routes that only touch the
 * database at request time.
 */
export const db: Database = new Proxy({} as Database, {
  get: (_target, property) => {
    const instance = getClient();
    const value = Reflect.get(instance, property) as unknown;
    return typeof value === "function"
      ? (value as (...args: unknown[]) => unknown).bind(instance)
      : value;
  },
  has: (_target, property) => Reflect.has(getClient(), property),
  ownKeys: () => Reflect.ownKeys(getClient()),
  getPrototypeOf: () => Reflect.getPrototypeOf(getClient()),
  getOwnPropertyDescriptor: (_target, property) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(getClient(), property);
    // The proxy target is an empty object, so every reported descriptor has to
    // be configurable; reporting a fixed one for a key the client does not have
    // would make `Object.hasOwn(db, anything)` true.
    return descriptor && { ...descriptor, configurable: true };
  },
});
