import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
const prisma = new PrismaClient();

return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
