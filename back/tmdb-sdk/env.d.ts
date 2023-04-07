/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    TMDB_API_BASE_URL: string;
    TMDB_API_TOKEN: string;
  }
}
