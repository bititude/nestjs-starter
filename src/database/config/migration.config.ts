import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';

config();

export default {
  out: 'src/database/migrations',
  driver: 'mysql2',
  schema: '../schemas/schema.ts',
  dbCredentials: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
  },
} satisfies Config;
