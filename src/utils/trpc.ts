import type { ServerRouter } from "@/server/router";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<ServerRouter>();
