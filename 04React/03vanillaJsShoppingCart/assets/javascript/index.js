class shoppingCart {
  constructor () {
    this.db = JSON.parse( localStorage.getItem('cart') ) || [];
    this.db.total = this.db.total || 0;
    this.db.shipping = this.db.shipping || 0;
    this.db.time = this.db.time || 0;
    this.db.discount = this.db.discount || 0;
    this.elements = {
      //TODO provide selectors for:
      //- product list
      list: document.getElementById("products"),
      items: document.querySelectorAll("#products li"),
      //- selector where the contents of the cart should be displayed:
      //- the reset button
      result: document.querySelectorAll(".cartresult"),
      reset: document.getElementById("reset"),
      totaltarget: document.querySelectorAll(".total-target"),
      cart: document.getElementById("cart"),
      //- total amount
      //- total template
      total_template: document.getElementById("total-template"),
      template: document.getElementById("template")
    }
    this.init()
  }
  init(){
    //here you take your cart item template and clone this piece of html to a virtual copy
    var card = this.elements.template
    for (var i in database ) {
      var element = card.cloneNode(true);
      //TODO here we have clone our template lets remove the id first and rmove display none class
      element.removeAttribute("id"),
      element.classList.remove('d-none'),
      //TODO fill the element with the image from the database and add the name of the product to the title
      element.querySelector('.card-img-top').src = database[i].image,
      element.querySelector(".card-title").prepend(i);
      // put the price and the discount percentage
      var price = document.createElement('span');
      price.innerHTML = `${database[i].price}€`
      element.querySelector(".card-body").appendChild(price);
      if (database[i].discount){
        price.style.textDecoration = "line-through";
        price.classList.add('text-danger');
        var discount = document.createElement('div');
        discount.innerHTML = `${database[i].discount} %`
        element.querySelector('.card-body').appendChild(discount);
      }
      //TODO lets put in the footer the shipping costs and delivery time
      var small = document.createElement('small');
      //TODO now we take the  button and fill it with all our data to use this for the remove action
      small.classList.add("text-muted"),
      small.innerHTML = `shipping: ${database[i].shipping}&euro; <br> delivery: ${database[i].delivery}d`,
      element.querySelector(".card-footer").appendChild(small);
      var btn = element.querySelector(".btn-primary");
      btn.dataset.name = i,
      btn.dataset.delivery = database[i].delivery,
      btn.dataset.shipping = database[i].shipping,
      btn.dataset.price = database[i].price,
      btn.dataset.discount = database[i].discount,
        this.elements.list.appendChild(element);
      // Fade-in effect
      // this removes the faded class with a timeout from all divs - wooosh!
      var divs = document.querySelectorAll('#products > div');
      var time = 0;
      for (let div of divs) {
        setTimeout(function(){
          div.classList.remove('faded');
        }, time);
        time+=100
      }
    }
    document.addEventListener('click', (e)=>{
      // these are the event listeners for dynamically created elements. Eg: A element is not present and will be generated and rendered with js, its hart to define the event listeners on document load. They will not hook up, so we listen to the document
      if(e.target && e.target.classList.contains( 'btn-danger' )){
        let itemKey = this.findItemKey(e.target.dataset.name)
        this.updateCart(e.target.dataset.name, true)
      } else if (e.target && e.target.classList.contains( 'cart-button' )){
        this.updateCart(e.target.dataset.name);
        this.render();
      }
    })

    this.render()
    this.resetEventListener()
  }
  resetEventListener() {
    this.elements.reset.addEventListener('click', (e)=>{
      this.db.items = []
      this.db.total = 0
      this.db.shipping = 0
      this.db.delivery = 0
      this.db.discount = 0
      localStorage.setItem("cart", JSON.stringify( {shipping: 0, total: 0, items: [], delivery: 0, discount: 0}))
      this.render()
    })
  }
  findItemKey(itemName){
    //TODO this is the "find a item" in the database function, refactor it to array.filter
    for (let i = 0; i < this.db.items.length; i++){
      if (this.db.items[i].name == itemName){
        return i
      }
    }
  }
  removeFromCart(itemName) {
    this.findItemKey(itemName)
  }
  updateCart(item, remove = false){
    //here the magic happens
    //try to understand what happens here
    let itemKey = this.findItemKey(item)
    if(remove){
      if(this.db.items[itemKey].count > 1){
        this.db.items[itemKey].count--
      }else{
        this.db.items.shift(itemKey)
      }
    } else {
      if(itemKey !== undefined){
        this.db.items[itemKey].count++
      } else {
        if (event.target.dataset.discount && event.target.dataset.discount !==  'undefined'){

          this.db.items.push({ 
            shipping: event.target.dataset.shipping, 
            name: event.target.dataset.name,
            price: event.target.dataset.price,
            discount: event.target.dataset.discount,
            delivery: event.target.dataset.delivery, count: 1 })
        }else{

        this.db.items.push({
           shipping: event.target.dataset.shipping,
           name: event.target.dataset.name, 
           price: event.target.dataset.price, 
           delivery: event.target.dataset.delivery, 
           count: 1})
      }
    }
  }
    if(this.db.items.length > 0) {
      this.db.total = this.db.items.map((i) => {
        return i.price * i.count
      }).reduce((e, i) => Number(e) + Number(i))
    
      this.db.shipping = this.db.items.map((i) => {
        return i.shipping
      })
      this.db.shipping = Math.max(...this.db.shipping)

      this.db.delivery = this.db.items.map((i) => {
        return i.delivery
      })
      this.db.delivery = Math.max(...this.db.delivery)

      this.db.discount = this.db.items.map((i) => {
        return i.discount ? Number( i.price ) * Number( i.discount ) : 0
      }).reduce((e, i) => Number(e) + Number(i))
    } else {
      this.db.shipping = 0;
      this.db.total = 0;
      this.db.delivery = 0;
      this.db.discount = 0;
    }

    localStorage.setItem("cart", JSON.stringify( {shipping: this.db.shipping, total: this.db.total, items: this.db.items, delivery: this.db.delivery, discount: this.db.discount}))
    this.render()
  }
  render(){
    this.db.items = this.db.items || []
    // the function checks if items are in the cart and hides the cart if it is empty
    if(this.db.items.length > 0 ){
      this.elements.cart.classList.remove('faded')
      for (let i = 0; i < this.elements.totaltarget.length; i++){
        this.elements.totaltarget[i].classList.remove('faded')
      }
    } else {
      this.elements.cart.classList.add('faded')
      for (let i = 0; i < this.elements.totaltarget.length; i++){
        this.elements.totaltarget[i].classList.add('faded')
      }
    }

    var cart = document.createElement('div')
    this.db.items.forEach( item => {
      //TODO create a list item, add bootstrap classes
      //fill it with a bootstrap badge span which shows the count, the name, the price, the total and the remove button
      // here yo go
      var extraLi = document.createElement("li");
      extraLi.classList += "list-group-item d-flex justify-content-between align-items-center ",
      extraLi.innerHTML = `<span class="badge badge-info badge-pill mr-2">${item.count} </span>  ${item.name} - ${item.price}€ - ${item.discount} % <span class="ml-auto mr-3 font-weight-bold">${(item.price * item.count).toFixed(2)}&euro;</span>`; 
      var extraBtn = document.createElement("button");
      extraBtn.classList.add("btn", "btn-sm", "btn-danger"),
      extraBtn.dataset.name = item.name,
      extraBtn.innerHTML = "<i class='fa fa-close pointer-events-none'></i>",
      extraLi.appendChild(extraBtn),
      cart.appendChild(extraLi);
    })
    
    for (let i = 0; i < this.elements.result.length; i++) {
      this.elements.result[i].innerHTML = cart.innerHTML
      // here yo go
    }

    var ttemplate = this.elements.total_template
    for (let index = 0; index < this.elements.totaltarget.length; index++){
      var clone = ttemplate.cloneNode(true)
      clone.removeAttribute("id");
      clone.classList.remove("d-none");
      clone.querySelector(".total").innerHTML = this.db.total ? this.db.total.toFixed(2) : 0,
      clone.querySelector(".delivery").innerHTML = this.db.delivery ? this.db.delivery.toFixed(0) : 0,
      clone.querySelector(".shipping").innerHTML = this.db.shipping ? this.db.shipping.toFixed(0) : 0,
      clone.querySelector(".mDiscount").innerHTML = this.db.discount ? this.db.discount.toFixed(1) : 0
      ttemplate.querySelector(".totalplusship").innerHTML = this.db.discount ? ( this.db.shipping + ((this.db.total * this.db.discount) / 100 ) ).toFixed(2) : ( this.db.shipping + this.db.total ).toFixed(2)
      if (this.db.total) {
        var tTotal = this.db.total.toFixed(1);
      } else {
        var tTotal = 0;
      } 
      this.elements.totaltarget[index].innerHTML = clone.innerHTML

    }
    //TODO we want to show the list of totals several times on the page
    //we loop over the target elements, take each time a new template, fill it with data and display it on the page

  }
}
var instaceOfCart = new shoppingCart();
