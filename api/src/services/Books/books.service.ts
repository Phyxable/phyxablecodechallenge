import { Injectable } from "@nestjs/common";

@Injectable()
export class BooksService {
  async getBooks() {
    return { name: "John Doe" };
  }
}
