import { Injectable } from '@nestjs/common';

@Injectable()
export default class Book {
  id: number;
  title: string;
  writer: string;
  coverImage: string;
  price: number;
  tags: string[];

  constructor() {
    this.id = undefined;
    this.title = '';
    this.writer = '';
    this.coverImage = '';
    this.price = 0;
    this.tags = [];
  }
}
