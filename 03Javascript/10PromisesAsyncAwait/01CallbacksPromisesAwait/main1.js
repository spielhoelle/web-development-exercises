$(document).ready(function() {
    console.log('document ready');
});

let currentIndex = 0;
function addNumber() {
    $('#numbers').append(`
        <h3>${currentIndex}</h3>
    `);

    currentIndex++;
}

function clearNumbers() {
    currentIndex = 0;
    $('#numbers').empty();
}

addNumberDelayedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        addNumber();
        // if(Math.random() > 0.8) {
        //   reject();
        // }
        // else {
        //   resolve();
        // }
        resolve();
      }, 
      1000)
    })
  }

function addSomeNumbersDelayedCallback() {
    setTimeout(() => {
      addNumber();      
      setTimeout(() => {
        addNumber();      
        setTimeout(() => {
          addNumber();      
          setTimeout(() => {
            addNumber();      
          }, 1000);
        }, 1000);        
      }, 1000);            
    }, 1000);
}

// without async/await
function addSomeNumbersDelayedPromise() {
    addNumberDelayedPromise()
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .then(addNumberDelayedPromise)
    .catch((err) => {
      $('#error').html('Error happened, promise rejected');
    })
}

// with async/await -> just syntactic sugar for promises
async function addSomeNumbersDelayedAsyncAwait() {
    try {
      await addNumberDelayedPromise();
      await addNumberDelayedPromise();
      await addNumberDelayedPromise();
      await addNumberDelayedPromise();
    }
    catch(err) {
        $('#error').html('Error happened, promise rejected');    
    }
}