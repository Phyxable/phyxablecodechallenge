import * as fs from 'fs';
import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './controllers/Book/book.controller';
import { BookService } from './services/Book/book.service';

const path = 'books.json';

describe('BookController', () => {
  let bookController: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    bookController = app.get<BookController>(BookController);
  });

  describe('root', () => {
    it('should return the content of books.json', async () => {
      const books = JSON.parse(fs.readFileSync(path, 'utf8'));
      expect(await bookController.getUser()).toEqual(books);
    });
  });
});
