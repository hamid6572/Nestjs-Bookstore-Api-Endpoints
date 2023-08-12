import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import Book from '../entity/book.entity';
import { BookService } from '../service/books.service';

@ApiTags('book')
@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BookService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns the list of all books',
    type: [Book],
  })
  async getAllBooks() {
    console.log('hello');
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Returns a single book',
    type: Book,
  })
  async getBookById(@Param('id') id: number) {
    return this.booksService.getBookById(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Creates a new book' })
  @ApiBody({ type: Book })
  async createBook(@Body() data) {
    return this.booksService.createBook(data);
  }

  // @Put(':id')
  // @ApiParam({ name: 'id', type: Number })
  // @ApiBody({ type: Book })
  // @ApiResponse({ status: 200, description: 'Updates a book' })
  // async updateBook(@Param() id, @Body() data) {
  //   return this.booksService.updateBook(id, data);
  // }

  // @Delete(':id')
  // @ApiParam({ name: 'id', type: Number })
  // @ApiResponse({ status: 200, description: 'Deletes a book' })
  // async deleteBook(@Param() id) {
  //   return this.booksService.deleteBook(id);
  // }
}
