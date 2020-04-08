<!-- Exercice 2 à réaliser en TypeScript, PHP et JavaCréez une classe pour représenter un meuble design.
Cette classe doit contenir trois attributs:
- l’éditeur du meuble
- le nom de la personne qui a designé le meuble
- l’année de conception du meuble.
 Dans un algorithme, créez une instance de cette classe.
 Cette instance est un objet représentant la chaise Wassily,
 crée par Marcel Breuer en 1925, et dont les droits d’édition appartiennent actuellement à l’entreprise Knoll. -->
<?php

//Class
class Furniture{
 public $editor;
 public $designer;
 public $year;

//Conctructor
  function __construct($editor,$designer,$year){
    $this->editor= $editor;
    $this->designer=$designer;
    $this->year=$year;
  }
}
//Display
$wassily = new Furniture("Knoll"," Marcel Breue",1925);
$wassily->year=1926;

print_r($wassily)


?>
