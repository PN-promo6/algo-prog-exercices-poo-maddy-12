
// Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET. 

class Main {
    public static void main(String[]args) {
        Client madina = new Client("Madina", 1234567);
        ProfessionalClient noah = new ProfessionalClient("Noah", 987456, 7412589);
         System.out.println(madina.name+" "+ madina.accountNumber);
         System.out.println(noah.name+" "+ noah.accountNumber+" "+noah.siretNumber);
    }
}

class Client {
//Variables
    String name;
    int accountNumber;

//constructor
    Client(String name, int accountNumber){
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

//Class
class ProfessionalClient extends Client {
    int siretNumber;

//Constructor
ProfessionalClient(String name, int accountNumber, int siretNumber){
  super(name, accountNumber);
  this.siretNumber = siretNumber;

    }
  
}