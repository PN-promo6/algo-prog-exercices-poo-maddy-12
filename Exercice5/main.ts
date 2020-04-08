// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel,
// l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.

//CLASS
class ConcertTicket {

  public concertPlace: string;
  public artistName: string;
  public dateOfConcert: string;
  public clientName: string = ""; //optionnel
  public placeNumber: number ;

//Constructeur
  constructor(concertPlace: string, artistName: string, dateOfConcert: string, placeNumber: number, clientName?: string) {
    this.concertPlace = concertPlace;
    this.artistName = artistName;
    this.dateOfConcert = dateOfConcert;
    this.placeNumber = placeNumber;
    if (clientName) {
        this.clientName = clientName;
    }

  }

//Methode
  htmlDetails(): string {
    let htmlContent: string = `
    <p>Lieu du concert: ${this.concertPlace}</p>
    <p>Nom de l'artiste: ${this.artistName}</p>
    <p>Date du concert: ${this.dateOfConcert}</p>
    <p>Numero de la place: ${this.placeNumber}</p> </br>`;

    if(this.clientName != ""){
      htmlContent = htmlContent +`<p>Nom du propréitaire: ${this.clientName}</p>`;
    };
    return (htmlContent);
}
}
let ticket01: ConcertTicket = new ConcertTicket("Opera de Paris","Mika","12/02/2020",156,"Madina" );
let ticket02: ConcertTicket = new ConcertTicket("Marseille","Soolking","16/02/2020",120);

console.log(ticket01.htmlDetails());
console.log(ticket02.htmlDetails());
