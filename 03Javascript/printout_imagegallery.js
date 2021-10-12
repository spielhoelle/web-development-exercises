#### IMAGE GALLERY ####

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Mini-Shop</div>
            <div class="navigation">
                <div class="navi-categories">
                    <a href="#" onclick="loadProducts()" class="category">All</a> |
                    <a href="#" onclick="loadProducts('Books')" class="category">Books</a> |
                    <a href="#" onclick="loadProducts('Movies')" class="category">Movies</a> |
                    <a href="#" onclick="loadProducts('Music')" class="category">Music</a>
                </div>
                <div class="navi-right">
                    <button id="btnuploadimage" class="btnuploadimage">New Pr oduct</button>
                </div>
            </div>
        </div>
        <div class="main">
            <div id="thumbnailcontainer" class="thumbnail-container">
            </div>
            <div class="product-details">
                <div class="product-container">
                    <div id="productimage" class="product-image">
                        <img src="/images/bobmarley.jpg" alt="">
                    </div>
                    <div id="productinfos" class="product-infos">
                        <h2 id="product-name">Hitlers Helfer</h2>
                        <div class="product-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quisquam facere quia eligendi dignissimos officiis in neque necessitatibus fuga sunt enim aliquid commodi iusto quaerat officia natus consequuntur voluptates iure vel sapiente ad voluptate maxime beatae! Accusamus, fuga! Veritatis neque voluptatem ex? Dicta nam vel rem unde possimus. Temporibus, ipsam.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
</body>
</html>

# CSS

* {
    padding: 0px;
    margin: 0px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    width: 100%;
    background: #797979b2;
}

.logo {
    padding: 5px;
    font-size: 2em;
    background: rgb(240, 240, 240);
    color: #1a1a1a;
}

a {
    color: cornflowerblue;
}

.navigation {
    padding: 10px;
    background: rgb(240, 240, 240);
    display: flex;
    justify-content: space-between;
}

.container {
    min-width: 600px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}

.thumbnail-container {
    display: flex;        
    justify-content: flex-start;
    flex-wrap: wrap;    
    padding: 10px;
    align-items: center;
    background: #4b4b4b;
    display: none;
}

.thumbnail {
    width: 250px;
    height: 180px;
    margin: 5px 10px;
    background: #1a1a1a;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(31, 31, 31, 0.2), 0 6px 20px 0 rgba(31, 31, 31, 0.19);
}

.thumbnail-name {
    padding: 2px;
    text-decoration: underline;
    background: rgba( 240, 240, 240, 0.6 );
}

.thumbnail-price {
    font-weight: bold;
    padding: 2px;
    text-align: right;
    color: rgb(12, 12, 12);
    background: rgba( 240, 240, 240, 0.6 );
}

.product-details {
    background: #4b4b4b;
}

.product-container {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
}

.product-image {
    padding: 10px;
}

.product-image img {
    width: 320px;
    height: 260px;
}

.product-description {
    margin-top: 20px;
}

# JS

let products = [];
let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');

document.addEventListener('click', function (event) {
	if (event.target.matches('.thumbnail')) {
        let id = event.target.getAttribute('data-id');
        showProductDetails(id);


    }
}, false);

function showProductDetails(id) {
    let index = 0;
    for(let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            index = id;
            break;
        }
    }

    
}

function loadProducts(category) {
    var xhr = new XMLHttpRequest();
    if(!category) {
        xhr.open('GET', 'http://localhost:3000/product');
    }
    else {
        xhr.open('GET', 'http://localhost:3000/product?category='+category);
    }
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            let resultObj = JSON.parse(xhr.responseText);
            products = resultObj.products;
            console.log(resultObj);                     

            thumbnailcontainerObj.innerHTML = '';
            for(let i=0; i<products.length; i++) {
                let newThumbnail = document.createElement('div');
                newThumbnail.className = 'thumbnail';
                newThumbnail.setAttribute('data-id', products[i].id);
                newThumbnail.style.background = 'url(\''+products[i].imgurl+'\') no-repeat center';

                let newName = document.createElement('div');
                newName.className = 'thumbnail-name';
                newName.innerHTML = products[i].name;
                newThumbnail.appendChild(newName);

                let newPrice = document.createElement('div');
                newPrice.className = 'thumbnail-price';
                newPrice.innerHTML = products[i].price;
                newThumbnail.appendChild(newPrice);

                thumbnailcontainerObj.appendChild(newThumbnail);
            }
        }
    }
    xhr.send();
}

loadProducts();
