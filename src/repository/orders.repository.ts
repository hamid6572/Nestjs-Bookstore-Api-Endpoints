import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(customerId: number, bookId: number) {
    return this.prisma.order.create({
      data: {
        customerId,
        bookId,
      },
    });
  }

  async cancelOrder(orderId) {
    return this.prisma.order.delete({
      where: { id: orderId },
    });
  }
  
  async getAllOrders() {
    return this.prisma.order.findMany();
  }
}