class HalloWorld {
    
    constructor() {
        this.x = 0;
    }

    inc() {
        this.x++;
        console.log('x = ', this.x);
    }

    static staticInc() {
        this.x++;
        console.log('x = ', this.x);        
    }
}

let hw1 = new HalloWorld();

hw1.inc();
hw1.inc();
hw1.inc();
// hw1.staticInc(); // error

HalloWorld.staticInc();
