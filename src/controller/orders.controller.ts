import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from '../service/orders.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import Order from 'src/entity/order.entity';

@Controller('order')
@ApiTags('order')
export class orderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiBody({ type: Order })
  createOrder(@Body() data: { customerId: number; bookId: number }) {
    return this.orderService.createOrder(data.customerId, data.bookId);
  }

  @Get()
  getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get('cancel/:id')
  @ApiParam({ name: 'id', type: Number })
  async cancelOrder(@Param('id') id: number) {
    return this.orderService.cancelOrder(id);
  }
}
