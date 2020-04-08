//  Exercice 1 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un livre.
// Cette classe doit contenir deux attributs:- un pour le titre du livre- un pour le prix du livre.
// Dans un algorithme, créez une instance de cette classe, et afficher le titre et le prix du livre.

class Book{
title:string;
price:number;

constructor(title:string,price:number){
  this.title = title;
  this.price = price;
}
}

let book: Book = new Book("Adam",15); //instance = exemplaire
console.log(book.title, book.price);
