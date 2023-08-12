import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ErrorFilter } from '../libs/error-handler/error-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const options = new DocumentBuilder()
    .setTitle('Bookstore API')
    .setDescription('API documentation for the Bookstore application')
    .setVersion('1.0')
    .addTag('book')
    .addTag('customer')
    .addTag('order')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new ErrorFilter());

  // Start the application
  await app.listen(3001);
}
bootstrap();
