import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/utils/prisma";

export const serverRouter = trpc
  .router()
  .query("findAll", {
    resolve: async () => {
      return await prisma.groceryList.findMany();
    },
  })
  .mutation("insertOne", {
    input: z.object({
      title: z.string(),
    }),
    resolve: async ({ input }) => {
      return await prisma.groceryList.create({
        data: { title: input.title },
      });
    },
  })
  .mutation("updateOne", {
    input: z.object({
      id: z.number(),
      title: z.string(),
      checked: z.boolean(),
    }),
    resolve: async ({ input }) => {
      const { id, ...rest } = input;

      return await prisma.groceryList.update({
        where: { id },
        data: { ...rest },
      });
    },
  })
  .mutation("deleteAll", {
    input: z.object({
      ids: z.number().array(),
    }),
    resolve: async ({ input }) => {
      const { ids } = input;

      return await prisma.groceryList.deleteMany({
        where: { 
          id: { in:  ids}
         },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
