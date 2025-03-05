import { Module } from '@nestjs/common';
import { DrizzleOrmModule } from 'drizzle-orm';
import { createPool } from 'mysql2/promise';

@Module({
  imports: [
    DrizzleOrmModule.forRoot({
      connection: createPool({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'quiz_platform',
      }),
    }),
  ],
})
export class DatabaseModule {}
