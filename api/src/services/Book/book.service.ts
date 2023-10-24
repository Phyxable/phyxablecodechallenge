import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  private readonly path = 'books.json';
  async getBooks() {
    const books = JSON.parse(fs.readFileSync(this.path, 'utf8'));
    return books;
  }
}
