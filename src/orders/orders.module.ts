import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_SERVICE } from '../config/services.js';
import { envs } from '../config/envs.js';
import { OrdersController } from './orders.controller.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.orderMicroserviceHost,
          port: envs.orderMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {}
