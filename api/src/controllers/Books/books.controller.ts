import { Controller, Get } from "@nestjs/common";
import * as books from "../../../books.json";
@Controller("books")
export class BooksController {
  constructor() {}

  @Get()
  async getBooks() {
    return { books };
  }
}
