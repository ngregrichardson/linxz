'use server';

import { resolve } from 'node:path';
import { db } from './index';
import { migrate } from 'drizzle-orm/libsql/migrator';

(async () => {
  await migrate(db, { migrationsFolder: resolve(__dirname, `../../${process.env.NODE_ENV === 'production' ? '../' : ''}migrations`) });
})();