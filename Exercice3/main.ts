// Créez une classe représentant une personne avec :
// - un constructeur
// - un attribut pour le nom
// - un attribut pour le prénom
// - un attribut optionnel pour la date de naissance
// - une méthode pour afficher le nom complet de la personne
//
// Dans un algorithme, créez des instances de cette classe : une avec la date de naissance,
// une sans la date de naissance. Appelez la méthode affichant le nom complet de la personne pour chaque instance.

class Person {
  firstname:string;
  lastname:string;
  birthdate:string;


  constructor(firstname:string, lastname:string, birthdate?:string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    //On peut faire aussi
    // if (birthdate) {
    //       this.birthdate = birthdate;
    // }
  }

  //methode
  displayInfo(){
    console.log("Je m'appelle " + this.firstname + " " + this.lastname + " , je suis née le " + this.birthdate);

  }


}
  let madina: Person = new Person("Madina","Benaferi","12-02-1993");
  madina.displayInfo();
