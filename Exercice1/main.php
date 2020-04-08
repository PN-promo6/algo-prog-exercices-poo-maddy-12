<!-- Exercice 1 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un livre.
Cette classe doit contenir deux attributs:- un pour le titre du livre- un pour le prix du livre.
Dans un algorithme, créez une instance de cette classe, et afficher le titre et le prix du livre. -->
<?php
//Class
class Book {
  public $title;
  public $price;

  //Constructor
  function __construct($title, $price){
    $this->title=$title;
    $this->price=$price;

  }
}
//Display
$book = new Book("Journal d'Hiroshima, 6 Aout - 30 Septembre 1945", 12);
echo($book->title." ". $book->price."€");

 ?>
