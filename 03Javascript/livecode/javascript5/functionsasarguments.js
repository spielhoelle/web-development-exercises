var years = [ 1990, 1965, 1937, 2005, 1998, 1985 ];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i<arr.length; i++) {
        arrRes.push( fn(arr[i]) );
    }   
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

var ages = arrayCalc( years, calculateAge );
console.log( ages );

// task:
//
// create a function maxHeartRate(age) that
// returns the maximum healthy heart rate 
// based on the age using this formula:
//
// maxHeartRate = 206.9 - (0.67 * age);
// this formular only applies for adults
// between 18 and 81
// eventually, apply it on the ages we have
// defined earlier.

function maxHeartRate(age) {
    if(age >= 18 && age <= 81) {
        return 206.9 - (0.67 * age);
    }
    else return -1
}

var heartRates = arrayCalc( ages, maxHeartRate );


