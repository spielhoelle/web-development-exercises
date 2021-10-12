class ITGuy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Constructing IT guy');
    }

    drinkCoffee() {
        console.log('My name is ' + this.name + ', and I am drinking coffee now.');
    }

    talkAboutTechStuff() {
        console.log('My name is ' + this.name + ', and I am talking about tech stuff now');
    }

    talkAboutCodingSpeed() {
        console.log('My name is ' + this.name + ', and I am talking about coding speed now');
    }    
}


class Developer extends ITGuy {
    constructor(name, age, skills, github) {
        super(name, age);
        this.skills = skills;
        this.github = github;
    }
    
    understandJavaScript(really) {
        if(really) 
        console.log('I am understanding JavaScript');
        else 
        console.log('Too Bad');
    }
    
    copyPasteFromStackOverflow() {
        console.log('Once again, I am copy pasting from StackOverflow...');
    }
}

// task:
// create two subclasses QualityAssurance and ProjectManager
// from the parent class ITGuy

class QualityAssurance extends ITGuy {
    constructor(name, age, experience, patience) {
        super(name, age);
        this.experience = experience;
        this.patience = patience;
    }
    
    checkQuality(product) {
        console.log('looks good');
    }
    
    writeReport() {
        console.log('no problem');
    }
}

class ProjectManager extends ITGuy {
    constructor(name, age, undeservedExtraSalary, contactList) {
        super(name, age);
        this.undeservedExtraSalary = undeservedExtraSalary;
        this.contactList = contactList;
    }
    
    abusePower() {
        console.log('When is it done?');
    }
    
    burnOut() {
        setTimeout( function(e) {
            console.log('I am going to sabbatical.')
        }, 1000*60*24*30*6); // half a year
    }
}

var max = new ITGuy('Max', 35);
var sabine = new ITGuy('Sabine', 28);

// lets create 2 developers and 1 project manager
var jan = new Developer('jan', 32, ['JavaScript', 'HTML', 'CSS', 'NodeJS'], 'foobaroo');

var ashok = new Developer('ashok', 32, ['JavaScript', 'HTML', 'CSS', 'NodeJS'], 'ashok');

var johannes = new ProjectManager('johannes', 32, 5000, [jan, ashok]);


