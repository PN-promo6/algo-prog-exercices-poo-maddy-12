// Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET. 

class Client {
    public name: string;
    public accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientProfessionnel extends Client {
    siretNumber: number;

    constructor(name: string, accountNumber: number, siretNumber: number) {
        super(name, accountNumber);
        this.siretNumber = siretNumber;
    }
}

let newClient: Client = new Client("Madina", 1234567899);
console.log(newClient.accountNumber, newClient.name);

let newClientPro: ClientProfessionnel = new ClientProfessionnel("Noah", 1234567889, 487615466);
console.log(newClientPro.accountNumber, newClientPro.name);