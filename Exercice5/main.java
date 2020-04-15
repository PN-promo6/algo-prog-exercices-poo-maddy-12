
class Main {
    public static void main(String[ ] args) {
    ConcertTicket ticket01 = new ConcertTicket("Opera de Paris", "Mika", "12/02/2020", 156, "Madina");
    ConcertTicket ticket02 = new ConcertTicket("Marseille", "Soolking", "16/02/2020", 120);
        System.out.println(ticket01.htmlDetails());
        System.out.println(ticket02.htmlDetails());
    }
}

//Class
class ConcertTicket {

    String concertPlace;
    String artistName;
    String dateOfConcert;
    String clientName =""; //Optionnal
    int placeNumber;


//Constructor
    public ConcertTicket(String concertPlace, String artistName, String dateOfConcert, int placeNumber ){
    this.concertPlace = concertPlace;
    this.artistName = artistName;
    this.dateOfConcert = dateOfConcert;
    this.placeNumber = placeNumber;
    }
    public ConcertTicket(String concertPlace, String artistName, String dateOfConcert, int placeNumber, String clientName){
    this.concertPlace = concertPlace;
    this.artistName = artistName;
    this.dateOfConcert = dateOfConcert;
    this.placeNumber = placeNumber;
    this.clientName = clientName;
    }
//Methode
    public String htmlDetails(){
        
        String htmlContent = "<p>Lieu du concert: "+ this.concertPlace + "</p> <p>Nom de l'artiste: "+ this.artistName + "</p> <p>Date du concert: " + this.dateOfConcert +"</p> <p>Numero de la place" +  this.placeNumber+  "</p> <p>Titulaire: "+ this.clientName + "</p>";
            
       if(this.clientName !=""){
            
          htmlContent = htmlContent + "<p> Titulaire :" + this.clientName + "</p>";  
        }
        return htmlContent;
    }

}