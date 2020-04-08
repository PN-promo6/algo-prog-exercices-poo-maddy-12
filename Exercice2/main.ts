// //Exercice 2 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un meuble design.
// Cette classe doit contenir trois attributs:
// - l’éditeur du meuble
// - le nom de la personne qui a designé le meuble
// - l’année de conception du meuble.
//  Dans un algorithme, créez une instance de cette classe.
//  Cette instance est un objet représentant la chaise Wassily,
//  crée par Marcel Breuer en 1925, et dont les droits d’édition appartiennent actuellement à l’entreprise Knoll.


class Furniture {
  editor: string;
  designer: string;
  year: number;

  constructor(editor: string, designer: string, year: number) {
    this.editor = editor;
    this.designer = designer;
    year.year = year;
  }
}

//Display

let wassily: Furniture = new Furniture("Knoll", " Marcel Breue", 1925);
wassily.year = 1926;
console.log(wassily.editor, wassily.designer, wassily.year);
