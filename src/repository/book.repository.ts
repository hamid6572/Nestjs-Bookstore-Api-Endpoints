import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createBook(data) {
    return this.prismaService.book.create({ data });
  }

  async getAllBooks() {
    return this.prismaService.book.findMany();
  }

  async getBookById(id) {
    return this.prismaService.book.findUnique({ where: { id } });
  }
}