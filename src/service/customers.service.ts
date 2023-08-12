import { Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/repository/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async createCustomer(data) {
    return this.customerRepository.createCustomer(data);
  }

  async getAllCustomers() {
    return this.customerRepository.getAllCustomers();
  }
}
