class Animal {
    constructor(name) {
        this.name = name;
        this.isAlive = true;
    }

    eat() {
        if(Math.floor(Math.random() * 10) === 3) {
            this.die();
        }
    }
    sleep() { }
    die() {
        console.log(this.name + ' is dead now');
        this.isAlive = false;
    }
}

class Mammal extends Animal {
    constructor(name) {
        super(name);
    }

    breathe() { }
}

class Fish extends Animal {
    constructor(name) {
        super(name);
    }

    swim() { }
}

class Bird extends Animal {
    constructor(name) {
        super(name);
    }

    fly() { }
    breathe() { }
}

class Woodpecker extends Bird {
    constructor(name) {
        super(name);
    }
}

class Hummingbird extends Bird {
    constructor(name) {
        super(name);
    }
}

class Tiger extends Mammal {
    constructor(name) {
        super(name);
    }

    kill(otherAnimal) {
        if(this.isAlive) otherAnimal.die();
    }
}

class Horse extends Mammal {
    constructor(name) {
        super(name);
    }
}

class Shark extends Fish {
    constructor(name) {
        super(name);
    }

    kill(otherAnimal) {
        if(this.isAlive) otherAnimal.die();    
    }
}

class Tuna extends Fish {
    constructor(name) {
        super(name);
    }
}

let vitaly = new Tiger('Vitaly');
let nemo = new Shark('Nemo');
let fury = new Horse('Fury');

nemo.die();
nemo.kill(fury);
nemo.kill(vitaly);
nemo.die();