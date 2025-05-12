import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('NestJS + Swagger 연동')
    .setVersion('1.0')
    .addBearerAuth() // JWT 인증용 (선택)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // http://localhost:3000/api-docs
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();