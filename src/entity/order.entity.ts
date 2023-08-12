import { Injectable } from "@nestjs/common";

@Injectable()
export default class Order {
  id: number;
  customerId: number;
  bookId: number;
  orderDate: Date;

  constructor() {
    this.id = undefined;
    this.customerId = 0;
    this.bookId = 0;
    this.orderDate = new Date();
  }
}
