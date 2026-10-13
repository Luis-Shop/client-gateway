import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  Query,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { ClientProxy } from '@nestjs/microservices';
import { ORDER_SERVICE } from '../config/services.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('createOrder', createOrderDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ordersClient.send('findAllOrders', paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersClient.send('findOneOrder', { id });
  }
}
