import { PrismaClient } from "@prisma/client";

/**
 * 
 * @description This is the Prisma Client using Postgresql as the database. It is used to connect to the database. It can be used to create, read, update and delete data from the database.
 * 
 * Creating a new user
 * @example
 * const user = await client.user.create({
 *    data: {
 *       email: ""
 *   }
 * })
 */
const client = globalThis.prisma || new PrismaClient();

// If we are not in production mode, we will set the globalThis.prisma to the client.
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// And now export the Prisma client to use it without creating all the time a new instance for the Database, to prevent memory leaks and increase performance.
export default client;