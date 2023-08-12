import { Injectable } from "@nestjs/common";

@Injectable()
export default class Customer {
  id: number;
  name: string;
  email: string;
  points: number;

  constructor() {
    this.id = undefined;
    this.name = '';
    this.email = '';
    this.points = 0;
  }
}
