<!-- Exercice 4 à réaliser en TypeScript, PHP et JavaExercice :
Créez une classe représentant un client d’une banque avec:
- un constructeur- un attribut privé pour le nom
- un attribut privé pour le numero de compte en banque
- une méthode pour connaître le numero de compte en banque
Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client. -->


<?php
  class Client {

    private $name;
    private $accountNumber;

    function __construct($name, $accountNumber){
      $this->name =$name;
      $this->accountNumber = $accountNumber;
    }

    function getAccountnumber(){

      return $this->accountNumber;
    }

    function getName(){
      return $this->name;
    }

    //setters qui permet de modifier le nom
    function setName($name){
      $this->name =$name;

    }
  }

  $client = new Client("madina", 1234567899);
  echo($client->getAccountNumber());
  //on modifie le nom
  $client->setName("Joe");
  //on appelle le getters pour afficher le nouveau nom
  echo($client->getName());


 ?>
