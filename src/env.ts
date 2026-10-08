import { defineEnv, string } from "@ctroenv/core";

export default defineEnv({
    GIT_URL: string(),

    // Optional to provide. User and Password are required for authentication if the repository is not public.
    LOCATION: string().default("static"),
    USER: string().optional(),
    PASSWORD: string().optional(),
});
