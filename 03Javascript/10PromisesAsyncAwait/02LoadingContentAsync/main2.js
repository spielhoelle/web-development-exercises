/*
    1 - get user data
    2 - load the orders of the user
    3 - show recommendations for the user
*/

// callback way
(function() {
$(document).ready(function() {

    function login(username, password, cb) {
        setTimeout( function() {
            cb({
                username: 'max',
                email: 'max@gmail.com',
                lastLogin: '2018-08-09 15:20:01'
            })
        }, 1000 );
    }
    
    function getOrdersFrom(user, cb) {
        if(user === 'max') {
            setTimeout( function() {
                cb([
                    { name: 'Playstation 4 Pro' },
                    { name: 'PSVR' },
                    { name: 'Resident Evil 7' }
                ])
            }, 1000 );
        }
    }
    
    function getRecommendations(orders, cb) {
        if(orders) {
            setTimeout( function() {
                cb([
                    { name: 'Eagle VR', price: 29.99 },
                    { name: 'VR Gun', price: 99.99 },
                    { name: 'Swat VR', price: 15.99 }
                ])
            }, 1000 );
        }
    }

    login('max', 'abc123', function(user) {
        $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');

        // we get the orders from max
        getOrdersFrom(user.username, function(orders) {
            $('.container').append('orderdata from server based on userdata: ' + JSON.stringify(orders) + '<br>'); 

            // we get the recommendations for the orders
            getRecommendations(orders, function(recommendations) {
                $('.container').append('recommendations from server based on order data: :' + JSON.stringify(recommendations) + '<br>');
            });
        });
    });

})});//();


//promise way 
(function() {
    $(document).ready(function() {
        function login(username, password, cb) {
            return new Promise( (resolve, reject) => {
                setTimeout( function() {
                    resolve({
                        username: 'max',
                        email: 'max@gmail.com',
                        lastLogin: '2018-08-09 15:20:01'
                    })
                }, 1000 );
            })
        }
        
        function getOrdersFrom(user, cb) {
            return new Promise( (resolve, reject) => {
                if(user === 'max') {
                    setTimeout( function() {
                        resolve([
                            { name: 'Playstation 4 Pro' },
                            { name: 'PSVR' },
                            { name: 'Resident Evil 7' }
                        ])
                    }, 1000 );
                }
            });
        }
        
        function getRecommendations(orders, cb) {
            return new Promise( (resolve, reject) => {
                if(orders) {
                    setTimeout( function() {
                        resolve([
                            { name: 'Eagle VR', price: 29.99 },
                            { name: 'VR Gun', price: 99.99 },
                            { name: 'Swat VR', price: 15.99 }
                        ])
                    }, 1000 );
                }
            });
        }
    
        function promiseWay() {
            login('max', '123abc')
            .then((user) => { 
                $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');         

                return getOrdersFrom(user.username);
            })
            .then((orders) => { 
                $('.container').append('orderdata from server based on userdata: ' + JSON.stringify(orders) + '<br>');             
                return getRecommendations(orders);
            })
            .then((recommendations) => { 
                $('.container').append('recommendations from server based on orderdata:' + JSON.stringify(recommendations) + '<br>');
            })        
        }

        async function asyncawaitWay() {
            try {
                let user = await login('max', '123abc');
                $('.container').append('userdata from server: ' + JSON.stringify(user) + '<br>');

                let orders = await getOrdersFrom(user.username);
                $('.container').append('orderdata from server based on userdata: ' + JSON.stringify(orders) + '<br>'); 

                let recommendations = await getRecommendations(orders);
                $('.container').append('recommendations from server based on orderdata:' + JSON.stringify(recommendations) + '<br>');                
            }
            catch(e) {
                console.log('error ' + e);
            }
        }

        //promiseWay();
        asyncawaitWay();

        // login('max', 'abc123', function(user) {
        //     $('.container').append('userdata from server ' + JSON.stringify(user) + '<br>');
    
        //     getOrdersFrom(user.username, function(orders) {
        //         $('.container').append('orderdata for ' + user.username + ':' + JSON.stringify(orders) + '<br>'); 
    
        //         getRecommendations(orders, function(recommendations) {
        //             $('.container').append('recommendations for ' + user.username + ':' + JSON.stringify(recommendations) + '<br>');
        //         });
        //     });
        // });
    
    })}) ();


