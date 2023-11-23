import { int, mysqlTable } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
  user_id: int('user_id'),
});
