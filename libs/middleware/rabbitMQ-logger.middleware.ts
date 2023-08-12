// src/logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RabbitMQService } from '../rabbitMQ/rabbitmq.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  use(req: Request, res: Response, next: NextFunction) {
    
    this.rabbitMQService.logRequest(req);
    next();
  }
}
