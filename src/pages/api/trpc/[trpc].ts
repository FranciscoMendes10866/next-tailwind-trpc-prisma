import * as trpcNext from "@trpc/server/adapters/next";
import { serverRouter } from "@/server/router";

export default trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext: () => null,
});
