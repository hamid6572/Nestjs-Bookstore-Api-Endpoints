import { Injectable } from '@nestjs/common';
import { BookRepository } from './../repository/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks() {
    return this.bookRepository.getAllBooks();
  }

  async getBookById(id) {
    return this.bookRepository.getBookById(parseInt(id));
  }

  async createBook(data) {
    return this.bookRepository.createBook(data);
  }

  // async updateBook(id: number, data) {
  //   return this.prismaService.book.update({ where: { id: id }, data });
  // }

  // async deleteBook(id) {
  //   return this.prismaService.book.delete({ where: { id } });
  // }
}
