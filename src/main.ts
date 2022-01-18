import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 const swaggerConfig = new DocumentBuilder()
 .setTitle('parseAdmin API')
 .setDescription('parse admin apis')
 .setVersion('1.0')
 .build();
 const doc = SwaggerModule.createDocument(app, swaggerConfig);
 SwaggerModule.setup('api/v1', app, doc);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());

  //app.setGlobalPrefix('/api')
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();