import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { envs } from './config/envs.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCutomExceptionFilter } from './common/exceptions/rpc-exception.filter.js';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCutomExceptionFilter());

  await app.listen(envs.port);

  logger.log(`Gateway running on port ${envs.port}`);
}

await bootstrap();
