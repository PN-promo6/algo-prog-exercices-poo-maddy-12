abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;

    }
}
class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;

    }
}

class Player {
    playerName: string;
    lifePoints: number;
    usedInvertorySize: number;
    items: Array<Item>;

    constructor(playerName: string) {
        this.lifePoints = 3;
        this.playerName = playerName;
        this.usedInvertorySize = 0;
        this.items = new Array<Item>();
    }

    addItem(item: Item): boolean {
        // let canAdd: boolean = false;
        if (this.usedInvertorySize + item.size <= 9) {
            this.items.push(item);
            //this.usedInvertorySize = this.usedInvertorySize + item.size;
            this.usedInvertorySize += item.size
            console.log("Bravo! vous avez obtenu un  " + item.name + "!");

            return true;
        } else { //on est pas obligé de mettre un else, on peut mettre directement "return false"
            console.log("Oops, il semble qu'il n'y ait plus de place dans votre inventaire :(");

            return false;
        }
    }
}
//Declaration des variable avec les données des paramétres 
let lara: Player = new Player("Lara Croft");
let teleporterRuby: Teleporter = new Teleporter('Téléporteur Ruby ', 200)
let teleporterSaphire: Teleporter = new Teleporter('Téléporteur Saphire ', 600)
let teleporterEmerald: Teleporter = new Teleporter('Téléporteur Emerald ', 350)
let weapon: Arrow = new Arrow("Whaev", 4);
//Appel à la méthode
lara.addItem(teleporterRuby);
lara.addItem(teleporterSaphire);
lara.addItem(teleporterEmerald);
lara.addItem(weapon);
