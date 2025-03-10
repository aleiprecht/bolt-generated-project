import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { TeamModule } from './team/team.module';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, QuizModule, TeamModule, AdminModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
