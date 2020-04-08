// Exercice 4 à réaliser en TypeScript, PHP et JavaExercice :
// Créez une classe représentant un client d’une banque avec:
// - un constructeur- un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.

class Client {
  private name:string;
  private accountNumber:number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

public getAccountNumber():number{
  return this.accountNumber;
}
 public getName(): string{
   return this.name;
 }

 public setName(name: string): void{
   this.name = name;
   //Void = elle retourne rien
 }
}

let madina: Client = new Client("madina",1234567899);
console.log(madina.getAccountNumber());

madina.setName("Joe");
console.log(madina.getName());
