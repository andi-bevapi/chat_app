import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useGlobalPipes(new ValidationPipe());
	app.useLogger(app.get(Logger));
	await app.listen(8080);
}
bootstrap();
