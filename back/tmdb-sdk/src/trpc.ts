import { initTRPC } from "@trpc/server";

if (!process.env.TMDB_API_BASE_URL) {
  throw new Error("TMDB_API_BASE_URL is not defined");
}

if (!process.env.TMDB_API_TOKEN) {
  throw new Error("TMDB_API_TOKEN is not defined");
}

const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;
