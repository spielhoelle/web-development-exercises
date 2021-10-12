// iife

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

var y = (function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score + goodLuck >= 5);
    return {
        a: function() {
            console.log(score + 5);
        }
    }
})(2);
