import { Controller, Get } from '@nestjs/common';
import { BookService } from '../../services/Book/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getUser() {
    return this.bookService.getBooks();
  }
}
