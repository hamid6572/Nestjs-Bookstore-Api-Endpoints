import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from '../service/customers.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import Customer from 'src/entity/customer.entity';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiBody({ type: Customer })
  createCustomer(@Body() data) {
    return this.customerService.createCustomer(data);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }
}
