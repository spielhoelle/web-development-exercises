// example of why we need to bind function calls in react components

class fakeReactClass {

    constructor() {
        this.halloworld = 'Hallo World';
    }

    sayHalloWorld() {
        console.log(this.halloworld);
    }

    sayHalloWorldArrow = (foo) => {
        console.log(this.halloworld);
    }

    render() {
        // return this.sayHalloWorld; // error
        return this.sayHalloWorld.bind(this);
    }
}

var hw = new fakeReactClass();
hw.render()();
