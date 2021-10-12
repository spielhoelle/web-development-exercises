let products = [];
let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');
let productdetailsObj = document.getElementById('productdetails');
let quantityObj = document.getElementById('quantity');
let totalamountObj = document.getElementById('totalamount');
let cartObj = document.getElementById('cart');

document.addEventListener('click', function (event) {
    if(event.target.matches('.thumbnail')) {
        let id = event.target.getAttribute('data-id');
        showProductDetails(id);
    }

    if(event.target.matches('.btnpurchaseorder')) {
        purchase(); 
    }
}, false);

let cart = localStorage.getItem('cart');
if(!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function removeCartItem(id) {
    console.log('removing item ' + id);
    let elem = document.querySelector('#cart div[data-id="'+id+'"]');
    elem.parentNode.removeChild(elem);

    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    let removeIndex = 0;
    for(let i=0; i<cart.length; i++) {
        if(cart[i].id === id) {
            removeIndex = i;
        } 
        else {
            total += cart[i].price * cart[i].quantity;
        }
    }

    cart.splice(removeIndex, 1);
    let carttotalamountObj = document.getElementById('carttotalamount');
    carttotalamountObj.innerHTML = total.toFixed(2);

    let strCart = JSON.stringify(cart);
    localStorage.setItem('cart', strCart);

    if(cart.length === 0) {
        cartObj.innerHTML = `            
            <h2>You do not have any items in your cart yet!</h2>
        `;
        return;
    }    
}

function showProductDetails(id) {
    let index = 0;
    for(let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            index = i;
            break;
        }
    }
    
    let priceObj = document.getElementById('price');
    priceObj.innerHTML = products[index].price;
    currentPrice = products[index].price;
    totalamountObj.innerHTML = products[index].price;

    quantityObj.value = "1";
    quantityObj.oninput = function() {
        totalamountObj.innerHTML = (products[index].price * quantityObj.value).toFixed(2);
    }
    
    let productnameObj = document.getElementById('productname');
    productnameObj.innerHTML = products[index].name;
    let productdescriptionObj = document.getElementById('productdescription');
    productdescriptionObj.innerHTML = products[index].description;
    let productimageObj = document.getElementById('productimage');
    productimageObj.src = products[index].imgurl;
    let btnaddcart = document.getElementById('btnaddcart');
    
    btnaddcart.onclick = function() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        products[index].quantity = quantityObj.value;
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        delete products[index].quantity;
        showCart();
    }

    thumbnailcontainerObj.style.display = 'none';
    cartObj.style.display = 'none';
    productdetailsObj.style.display = 'block';
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cartObj.innerHTML = '';

    if(cart.length === 0) {
        cartObj.innerHTML = `            
            <h2>You do not have any items in your cart yet!</h2>
        `;
        return;
    }

    let total = 0;
    for(let i=0; i<cart.length; i++) {
        let newCartItem = `
            <div class="cart-item" data-id="${cart[i].id}">
                <div>
                    <img id="cartpicture" class="cart-picture"  src="${cart[i].imgurl}" alt="">
                </div>
                <div class="cart-description">
                    <div>
                    <span class="cart-quantity">${cart[i].quantity}</span>
                    x <span class="cart-productname">${cart[i].name}</span>: <span class="cart-amount">${cart[i].quantity * cart[i].price}</span> € <button class="remove-item" onclick="removeCartItem('${cart[i].id}')">Remove</button>
                    </div>
                </div>
            </div>    
        `;    
        cartObj.innerHTML += newCartItem;
        total += cart[i].quantity * cart[i].price;
    }

    cartObj.innerHTML += `
        <div id="cartbuy" class="cart-buy"><hr class="cart-break">
        Total Amount: 
        <span id="carttotalamount" class="cart-totalamount">${total.toFixed(2)}</span> €<button class="btnpurchaseorder">Buy Now</button> 
        </div>
    `;

    cartObj.style.display = 'block';
    thumbnailcontainerObj.style.display = 'none';
    productdetailsObj.style.display = 'none';
}

function purchase() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/order');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            if(res.error === 0) {
                alert('Thanks for your purchase!');
                location.reload();
            }
            else {
                alert('Error: ' + res);
            }
        }
    }

    let productids = [];
    for(let i=0; i<products.length; i++) {
        productids.push(i);
    }
	var params = {
		productids: productids
	};
	xhr.send(JSON.stringify(params));    
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
            
            cartObj.style.display = 'none';
            productdetailsObj.style.display = 'none';            
            thumbnailcontainerObj.style.display = 'flex';
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