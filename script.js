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

