//Primitivies Vs Objects

//Primitives
var a=23;
var b=a;
a=46;

console.log(a);  //46
console.log(b);  //23

//objects
var obj1= {
    name : 'john',
    age : 26
};

var obj2=obj1;
obj1.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30
console.log(obj2.name);

obj2.age=45;
console.log("new age=>"+obj1.age);
obj2.name = 'dci';
console.log(obj2.name);

//Functions

var age = 27;
var obj = {
    name: 'Joao',
    city: 'Lisbon'
};

function change(a, b)
{
    a=30;
    b.city='Berlin';
}

change(age,obj);

console.log(age);  //27
console.log(obj.city); //Berlin
 
/////////////////////////////////////////////
// Lecture : Passsing functions as agruments

var years= [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn)
{
    var arrRes=[];

    for(var i=0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;

}


//calculate the age
function calculateAge(e1)
{
    return 2018-e1;
}

function isFullAge(e1)
{
    return e1 >=18;
}

function maxHeartRate(e1)
{
    if(e1 >= 18 && e1 <=81)
    {
        return Math.round(206.9- (0.67*e1));
    }
    else
    {
        return -1;
    }
}


//get ages
var ages=arrayCalc(years,calculateAge);

var fullAges=arrayCalc(ages,isFullAge);

var rates=arrayCalc(ages,maxHeartRate);

console.log("===Ages===");
console.log(ages);

console.log("===Full Ages===");
console.log(fullAges);

console.log("===Rates===");
console.log(rates);

////////////////////////////////////////
// Lecture : Functions returning functions

function interviewQuestion(job)
{
    if(job=='designer')
    {
        return function(name)
        {
            console.log(name +', can you please explain what UX Design is?');
        }
    }
    else if(job=='teacher')
    {
        return function(name)
        {
            console.log('What subject do you teach, '+name + '?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('Hello '+name+' ,what do you do?');
        }
    }
    
}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

//imp
console.log("======");
interviewQuestion('teacher')('Mark');
interviewQuestion()('I am not undefine');

function LetterCapitalize(str,fn)
{
    var words=str.split(" ");
    return fn(words);
}

function getCapitilize(words)
{
    for(var i=0; i<words.length; i++)
    {
        words[i]=words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }

    return words.join(" ");
}

console.log(LetterCapitalize("hello world",getCapitilize));



//Task 2
// Input/assign to collect prime number until. e.g 20
// Check number is prime or not. if number is prime then save into array
// and display after all collecting the prime number.
// Passing functions as parameter/arguments OR Functions returning functions

/*
Some facts:

The only even prime number is 2. All other even numbers can be divided by 2.
If the sum of a number's digits is a multiple of 3, that number can be divided by 3.
No prime number greater than 5 ends in a 5. Any number greater than 5 that ends in a 5 can be divided by 5.
Zero and 1 are not considered prime numbers.
Except for 0 and 1, a number is either a prime number or a composite number. A composite number is defined as any number, greater than 1, that is not prime.
*/

function showPrimes(n,fn)
{
    var arrRes=[];
    for(let i=2; i<n; i++)
    {
        if(!fn(i))
           continue;
        else
           arrRes.push(i);

    }
    return arrRes;
}

function isPrime(n)
{
    for(let i=2; i<n; i++)
    {
        if(n%i==0) return false;
    }
    return true;

}

console.log(showPrimes(100,isPrime));

// Task 3
// Passing functions as parameter/arguments OR Functions returning functions
// Input the string and return the string in reversed order.
// Sample Test Cases
// Input :  "I Love Code"
// Output :  "edoC evoL I"


function getReverseString(str,fn)
{
    return fn(str);
}

function convertReverse(str)
{
    return str.split("").reverse().join("");
}

console.log(getReverseString("I Love Code",convertReverse));


//Task 4
//Define function and it take number parameter and define other function inside that function and calculate factorial of that number. 
//e.g if num=4, return (4*3*2*1) =  24
//Sample Test Cases
//input: 4
//output: 24


function getFactorial(num)
{
    
    function factorial(n)
    {
        if(n==0) 
        { 
            return 1;
        }
        else 
        { 
            
            return factorial(n-1)*n; 
            //factorial(3)*4  
            //factorial(2)*4
            //factorial(1)*4
            //factorial(0)*4  ==> 1*4

            // 4*3 * 2 * 1 * 1
        }
        
    }
    return factorial(num);

}

console.log(getFactorial(4));


/////////////////////////////////////
// Lecture IIFE


function game(){
    var score=Math.round()*19;
    console.log(score >=5);
}
game();


(function(){
    var score=Math.round()*19;
    console.log(score >=5);
})();
//console.log(score);

(function(goodLuck){
    var score=Math.random() *10;
    console.log(score>=5 -goodLuck);
})(5);

////////////////////////////////////////
// Lecture : Closures

function retirement(retirementAge)
{
    var a=' years left until retirement';

    return function(yearOfBirth)
    {
        var age=2018-yearOfBirth;
        console.log((retirementAge-age) +a);
    }

}

var retirementUS=retirement(66);
var retirementGermany=retirement(67);
retirementUS(1990);
retirementGermany(1990);


//global scope, inner scope etc

topping="anchovi";

function pizzaParty(numSlices)
{
    var topping="pepperoni";

    innerFunction=function(){
        var topping="ham";

        console.log("...But put " + topping + " on " + numSlices+ " slices" );
    }

    console.log("This pizza is a all about the "+topping);

    innerFunction();
}

pizzaParty(3);

/////////////////////////////////////////////////
// Lecture: Rest Parameters/Operator

function isFullAge5(arguments)
{
    console.log("Without Rest====>");
    console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments);

    console.log(argsArr);

}

isFullAge5(1990,1999,1965);
//isFullAge5(1990,1999,1965,2016,1987);


function isFullAge6(...years)
{
    console.log("Using Rest====>");
    console.log(years);
    //years.forEach(cur=>console.log((2018-cur) >=18));
    for(index in years)
    {
        console.log("year=>"+years[index]);
    }
}

//Rest operator/parameters taking single values and convert into array
isFullAge6(1990,1999,1965,2016,1987);
//isFullAge6();


///////////////////////////////////////////////////////
// Lecture: Spread Operator

function addFourAges(a,b,c,d)
{
    return a+b+c+d;
}

//case 1
var sum1=addFourAges(18,30,12,21);
console.log(sum1);

//case 2
var ages=[18,30,12,21];
var sum2=addFourAges.apply(null,ages);
console.log(sum2);

//case 3
//Spread operator taking array and convert into single values
const sum3=addFourAges(...ages);
console.log(sum3);

//case 4
const familySmith= ['john','Jane','Mark'];
const familyMiller=['Mary','Bob','Ann'];
const bigFamily=['joya',...familySmith, 'Lily',  ...familyMiller,'Maya'];
console.log(bigFamily);

//case 5
function mixBoth(str,...first)
{
    console.log("Mix....");
    console.log("str==>"+str);// 18
    console.log("First==>"+first);
    console.log(first);
    console.log(...first);
  
}
mixBoth(...ages);


////////////////////////////////////////////
// Lecture : Default parameters

/*
function checkDefault(data)
{
    console.log("checkDefault...");
    console.log(data[0]);  //throw error :Uncaught TypeError: Cannot read property '0' of undefined at checkDefault
}

checkDefault(); //without passing argument
*/

function checkDefault(data=['test'])
{
    console.log("checkDefault...");
    console.log(data[0]);  //it will work
}

checkDefault();  //without passing argument


function personInfo(firstName,yearOfBirth,lastName='Smith',nationality='american')
{
    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality=nationality;

    var fullInfo=this.firstName + " " +this.lastName + " year of Birth " + this.yearOfBirth + " nationality " +this.nationality;

    return fullInfo;

}

console.log(personInfo('John',1990));



//Task


(function() {

alert("hello");
//this is object constructor function
function Question(question, answers, correct)
{
	this.question=question;
	this.answers=answers;
	this.correct=correct;
	
}

//Display Question method
Question.prototype.displayQuestion=function(){
	
	console.log(this.question);

	for(var i=0; i<this.answers.length; i++)
	{
	  console.log(i+ ' : ' +this.answers[i]);
	}

}


//check the answers method
Question.prototype.checkAnswer= function(ans){

	if(ans==this.correct)
	{
	   console.log('Correct Answer!');
	}
	else
	{
	   console.log('Wrong answer. Try again:');
	}
}



//create couple of questions

var q1=new Question('Is Javascript the coolest programming lanugage in the world?', ['yes','no'],0);

var q2=new Question('What is the name of the course\'s teacher?',['itmar','Toni','Jan'],2);

var q3=new Question('What does best describe coding?',['Boring','Hard','Fun','Tediuos'],2);


//store them into array
var questions= [q1,q2,q3];


//get random question using random method and questions length.

var n=Math.floor(Math.random()*questions.length); // 0 OR 1 OR 2

questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer'));

questions[n].checkAnswer(answer);

})(); //invoke




























