
import z from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_SECRET_ID: z.string(),
  REDIRECT_TARGET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());

  throw Error("Invalid environment variables");
}

console.log(_env.data)

export const env = _env.data;
