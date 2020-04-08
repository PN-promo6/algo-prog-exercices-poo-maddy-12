

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
