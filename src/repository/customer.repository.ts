import Customer from 'src/entity/customer.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async createCustomer(data) {
    return this.prisma.customer.create({
      data: {
        ...data,
        points: 100,
      },
    });
  }

  async getAllCustomers() {
    return this.prisma.customer.findMany();
  }

  async getCustomerById(id) {
    return this.prisma.customer.findUnique({ where: { id } });
  }

  async updateCustomer(id: number, customer: Customer) {
    return this.prisma.customer.update({ where: { id: id }, data: customer });
  }
}
