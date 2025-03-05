import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getQuizzes() {
    // Implement logic to get quizzes
    return [];
  }
}
