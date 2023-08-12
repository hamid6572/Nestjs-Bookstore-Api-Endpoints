import { CustomerRepository } from 'src/repository/customer.repository';
import { OrderRepository } from './../repository/orders.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private customerRepository: CustomerRepository,
  ) {}

  async createOrder(customerId: number, bookId: number) {
    const customer = await this.customerRepository.getCustomerById(customerId);
    if (!customer) {
      throw new Error('Customer not found.');
    }

    if (customer.points < 1) {
      throw new Error('Insufficient points to make an order.');
    }

    // handle book order and points deduction here
    // book entity and logic to deduct points after an order
    customer.points -= 1;
    await this.customerRepository.updateCustomer(customerId, customer);
    await this.orderRepository.createOrder(customerId, bookId);

  }

  async cancelOrder(orderId) {
    return this.orderRepository.cancelOrder(parseInt(orderId));
  }

  async getAllOrders() {
    return this.orderRepository.getAllOrders();
  }
}