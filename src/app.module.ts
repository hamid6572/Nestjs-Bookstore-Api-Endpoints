// src/app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQService } from '../libs/rabbitMQ/rabbitMQ.service';
import { LoggingMiddleware } from '../libs/middleware/rabbitMQ-logger.middleware';
import { BooksController } from './controller/books.controller';
import { BookService } from './service/books.service';
import { CustomerController } from './controller/customers.controller';
import { orderController } from './controller/orders.controller';
import { CustomerService } from './service/customers.service';
import { CustomerRepository } from './repository/customer.repository';
import { BookRepository } from './repository/book.repository';
import { OrderService } from './service/orders.service';
import { OrderRepository } from './repository/orders.repository';
import { PrismaService } from './prisma/prisma.service';
import { RabbitMQModule } from 'libs/rabbitMQ/rabbitMQ.module';

@Module({
  imports: [RabbitMQModule],
  controllers: [
    AppController,
    CustomerController,
    BooksController,
    orderController,
  ],
  providers: [
    AppService,
    CustomerService,
    CustomerRepository,
    BookService,
    BookRepository,
    OrderService,
    OrderRepository,
    PrismaService,
    RabbitMQService,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
