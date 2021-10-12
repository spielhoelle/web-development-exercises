// 1. bank account
// 2. game
// 3. good

let person = {
    firstname: 'nemer',
    lastname: 'sahli'
};

let bankAccount = {
    iban: '123456789',
    bic: 'ABC123',
    currency: 'EUR',
    type: 'giro',
    balance: 1000000,
    onlinebanking: false,
    credit: 2500,
    owner: person
};

class BankAccount {
    constructor(iban, bic, currency, owner) {
        this.iban = iban;
        this.bic = bic;
        this.currency = currency;
        this.owner = owner;
    }    
}

class SavingsAccount extends BankAccount {
    constructor(iban, bic, currency, owner, withdrawalPeriod) {
        super(iban, bic, currency, owner);
        this.withdrawalPeriod = withdrawalPeriod;
    }

    withdraw() {
        if(this.withdrawalPeriod > 6) {
            // ...
        }
    }
}

class GiroAccount extends BankAccount {
    constructor(iban, bic, currency, owner, balance, negativeInterest = 0.17) {
        super(iban, bic, currency, owner);
        this.balance = balance;
        this.negativeInterest = negativeInterest;
    }
}

let myGiro = new GiroAccount('123', 'ABC', 'EUR', 'jan', 5000);

class GiroTestAccount extends GiroAccount {
    constructor(iban, bic, currency, owner, balance, negativeInterest = 0.17, testTransfer) {
        super(iban, bic, currency, owner, balance, negativeInterest);
        this.testTransfer = testTransfer;
    }
}

let myTestGiro = new GiroAccount('123', 'ABC', 'EUR', 'jan', 5000, 0.2, true);



var obj = {
    firstname: 'jan',
    age: 32
};

class Person {
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
}