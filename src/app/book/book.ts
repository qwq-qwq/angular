export class Book {
   title: string;
   author: string;
   year: number;
   description: string;
   pages: number;
   price : number;

  constructor(title: string, author: string, year: number, description: string, pages: number,
  price: number) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.pages = pages;
    this.price = price;
  }
}
