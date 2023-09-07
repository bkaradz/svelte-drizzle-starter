import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
	schema: './src/lib/server/drizzle/schema/index.ts',
	driver: 'pg',
	out: './src/lib/server/db/migrations',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL || ''
	}
} satisfies Config;
