class ship {
    constructor(a, b, c, name) {
        this.hull = a;
        this.firepower = b;
        this.accuracy = c;
        this.name = name;
    }
    attack(enemyShip) {
        if (Math.random() < this.accurac) {
            console.log(`${this.name} fires ${this.firepower} shots at the target`);
            enemyShip.hull -= this.firepower;
        } else {
            console.log(`${this.name} missed`);
        }
    }
}

class USS extends ship {
    constructor() {
        super(20, 5, 0.7, "USS Ship");
    }
}

class Alienship extends ship {
    constructor() {
        let h = Math.floor(Math.random() * 4) + 3;
        let f = Math.floor(Math.random() * 3) + 2;
        let a = Math.random() * 0.2 + 0.6;
        super(h, f, a, "Alien Ship");
    }
}

const alienship1 = new Alienship("Alien Ship");
const uss1 = new USS("USS");

function Round(a, b) {
    while (a.hull >= 0 && b.hull >= 0) {
        a.attack(b);
        if (b.hull <= 0) {
            console.log(`Alienship is Massacred`);
        } else {
            console.log(`Alienship attacks`);
            b.attack(a);
            if (a.hull >= 0) {
                console.log(`You Survive`)
            } else {
                console.log(`You are destroyed`);
            }
        }
    }
}

const allShips = [];
allShips.push(new Alienship());
allShips.push(new Alienship());
allShips.push(new Alienship());
allShips.push(new Alienship());
allShips.push(new Alienship());
allShips.push(new Alienship());
Round(uss1, alienship1);

console.log(allShips);

while (allShips.length !=0) {
    Round(uss1, allShips[0]);

    if(uss1.hull <= 0) {
        console.log("You lose the Game");
        break;
    }
    if (allShips[0].hull <= 0) {
        allShips.shift();
        console.log("Ship Destroyed");
    }

    If (uss1.hull >= 0 && allShips.length === 0) {
        console.log("You Win");
        break;
    }

        let windowPage = window.prompt("Retreat? (Press R) Attack (Press A)");
    if (windowPage === null) {
        windowPage = "";
    }

    if (windowPage.toLowerCase() === "r") {
        console.log("You retreat, Game over!");
        break;
    } else {
    }
}
