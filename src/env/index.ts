
import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_SECRET_ID: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());

  throw Error("Invalid environment variables");
}


export const env = _env.data;
