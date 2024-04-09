const PROIZVODI = {
    "3850104230011": {
        "product_name": "Sweatshirt",
        "product_type": "Sweatshirt",
        "product_price": 69.99,
        "product_image": "./images/Duks1.png",
        "product_image2": "./images/Duks1a.png",
        "stock": 5
    },
    "8600012704051": {
        "product_name": "Quarter-Zip Sweatshirt",
        "product_type": "Sweatshirt",
        "product_price": 75.99,
        "product_image": "./images/Duks2.png",
        "product_image2": "./images/Duks2a.png",
        "stock": 3
    },
    "8001841663692": {
        "product_name": "Hoodie",
        "product_type": "Sweatshirt",
        "product_price": 69.99,
        "product_image": "./images/Duks3.png",
        "product_image2": "./images/Duks3a.png",
        "stock": 5
    },
    "8600043028270": {
        "product_name": "Windbreaker Jacket",
        "product_type": "Jacket",
        "product_price": 95.99,
        "product_image": "./images/Jakna1.png",
        "product_image2": "./images/Jakna1a.png",
        "stock": 1
    },
    "4067700013019": {
        "product_name": "Hardshell Jacket",
        "product_type": "Jacket",
        "product_price": 99.99,
        "product_image": "./images/Jakna2.png",
        "product_image2": "./images/Jakna2a.png",
        "stock": 7
    },
    "3838471047043": {
        "product_name": "Woven Letterman Jacket",
        "product_type": "Jacket",
        "product_price": 95.99,
        "product_image": "./images/Jakna3.png",
        "product_image2": "./images/Jakna3a.png",
        "stock": 0

    },
    "8600103027779": {
        "product_name": "T-Shirt",
        "product_type": "Shirt",
        "product_price": 29.99,
        "product_image": "./images/Majca1.png",
        "product_image2": "./images/Majca1a.png",
        "stock": 5
    },
    "8600103024571": {
        "product_name": "Polo Shirt",
        "product_type": "Shirt",
        "product_price": 39.99,
        "product_image": "./images/Majca2.png",
        "product_image2": "./images/Majca2a.png",
        "stock": 8
    }
       
}

class ProductInfo {
    constructor(product_id, title, price) {
        this.product_id = product_id
        this.title = title 
        this.price = price 
    }
}
 
class Product extends ProductInfo {
    constructor(product_id, title, price, image, image2, stock, type) {
        super(product_id, title, price)
        this.stock = stock
        this.image = image
        this.image2 = image2
        this.type = type
        this.modalelement = document.createElement("div")
        this.modalelement.classList.add("modal")
        this.modalelement.classList.add(this.type)
        this.modalelement.innerHTML = this.modal_html()
        this.element = document.createElement("div")
        this.element.classList.add("product")
        this.element.classList.add(this.type)
        this.element.innerHTML = this.html()
    }

    html() {
        return `
        <div class="typeInfoDiv">${this.type}</div>
        <img src="${this.image}"  alt="${this.title}" width="60%" />
        <h3>${this.title}</h3>
        <a href="#" class="details" data-details="${this.product_id}">Wiew more details<a>
        <p>Price: ${this.price} $ </p>
        <p><b>Stock: </b><span>${this.stock}</span></p>
        <p><button id="btn" class="add-to-cart"
        ${this.stock == 0 ? "disabled" : ""}
        data-product-id="${this.product_id}">Add to cart</button></p>
        `
    }

    changeQuantityEvent(stock_change){
        this.stock += stock_change
        const spanStock = this.element.querySelector("span")
        const btnStock = this.element.querySelector("#btn")
        spanStock.innerText = this.stock
        if(this.stock == 0) {
            btnStock.setAttribute("disabled", "on")
        } else {
            btnStock.removeAttribute("disabled")

        }
    }

    modal_html() {
        return `

        <div class="modal_background">
        <div class="modal_content">


        <div class="typeInfoDiv">${this.type}</div>

        <div id="info">

            <div id="spl">

                <section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <img src="${this.image}"  alt="${this.title}" width="20vw">
                        </li>
                        <li class="splide__slide">
                            <img src="${this.image2}"  alt="${this.title}" width="20vw">
                        </li>
                        <li class="splide__slide">
                            <img src="${this.image}"  alt="${this.title}" width="20vw">
                        </li>
                        <li class="splide__slide">
                            <img src="${this.image2}"  alt="${this.title}" width="20vw">
                        </li>
                    </ul>
                </div>
                </section>
      
                <ul id="thumbnails" class="thumbnails">
                    <li class="thumbnail">
                        <img src="${this.image}"  alt="${this.title}" width="10%">
                    </li>
                    <li class="thumbnail">
                        <img src="${this.image2}"  alt="${this.title}" width="10%">
                    </li>
                    <li class="thumbnail">
                        <img src="${this.image}"  alt="${this.title}" width="10%">
                    </li>
                    <li class="thumbnail">
                        <img src="${this.image2}"  alt="${this.title}" width="10%">
                    </li>
                </ul>

            </div>
            <div id="informations">
                <div>
                  Main Info : <hr>
                    <p>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tempora itaque inventore, dolorum eveniet eligendi, quia doloribus neque officiis voluptates doloremque ipsum reiciendis! Iure provident nemo non labore cumque tenetur.</span>
                        <br>
                        <span>Fuga ab dolor sint minima provident magni, veritatis totam atque odit unde soluta voluptatibus quam voluptates iste, necessitatibus laudantium, nulla deserunt. Pariatur nostrum quos ullam earum, quas quae corrupti qui!</span>
                        <span>Maxime neque maiores ad vero voluptatem. Facilis, non maiores corrupti saepe libero id nobis vel fugiat, voluptatibus placeat repellendus blanditiis! Asperiores sapiente, ad libero explicabo dolorum optio voluptates eos repudiandae!</span>
                    </p>
                    <p>
                        <span>Fuga ab dolor sint minima provident magni, veritatis totam atque odit unde soluta voluptatibus quam voluptates iste, necessitatibus laudantium, nulla deserunt. Pariatur nostrum quos ullam earum, quas quae corrupti qui!</span>
                    </p>
                    <br>
                </div>
                <br>
                <div>
                  Maintaince : <hr>
                    <p>
                        <span> - Maxime neque maiores ad vero voluptatem. Facilis, non maiores corrupti saepe libero id nobis vel fugiat, voluptatibus placeat repellendus blanditiis! Asperiores sapiente, ad libero explicabo dolorum optio voluptates eos repudiandae!</span>
                    </p>
                    <p>
                        <span> - Fuga ab dolor sint minima provident magni, veritatis totam atque odit unde soluta voluptatibus quam voluptates iste, necessitatibus laudantium, nulla deserunt. Pariatur nostrum quos ullam earum, quas quae corrupti qui!</span>
                    </p>
                </div>
            </div>

        </div>

        <h3>${this.title}</h3>
        <p>${this.price} $ / pcs</p>


        <button id="btnm" onclick="this.parentNode.parentNode.parentNode.remove()">&times;</button>

        </div>
        </div>


        `
    }
}

class CartItem extends ProductInfo {
    constructor(product_id, title, price, image, type, quantity) {
        super(product_id, title, price)
        this.image = image
        this.type = type
        this.quantity = quantity
        this.element = document.createElement("div")
        this.element.classList.add("cart-item")
        this.element.innerHTML = this.html()
     

    }

    html() {
        return `
            <div><img src="${this.image}"  alt="${this.title}" id="cartImg" /></div>
            <div>${this.title}</div>
            <div>${this.price} $ </div>
            <div id="qch">
                <button data-cart-item-id="${this.product_id}" class="increase" >+</button>
                <span ><span id="qSpan" >${this.quantity}</span> pcs</span>
                <button data-cart-item-id="${this.product_id}" class="decrease" >−</button>
            </div>
            <div> Σ <span class="fullP"></span> $ </div>
            <div class="remove"><button data-dremove="${this.product_id}" class="remove">x</button></div>
        `
    }

    changeQuantityEvent(quantity_change){
        this.quantity += quantity_change
        const spanQuantity = this.element.querySelector("#qSpan")
        const spanFullP = this.element.querySelector(".fullP")
        spanQuantity.innerText = this.quantity
        spanFullP.innerText = (this.quantity * this.price).toFixed(2)
        const btnQuantity = this.element.querySelector(".decrease")
        if(this.quantity == 1) {
            btnQuantity.setAttribute("disabled", "on")
        } else {
            btnQuantity.removeAttribute("disabled")
        }

    }
}

class Cart {

    constructor(element) {
        this.element = element
        this.element.innerHTML = " <p> There are no curently products in cart list !</p> "
        this.subscribers = {
            "add_to_cart":[],
            "increase":[],
            "decrease":[]
        }
        this.items = []
        this.tot = 0
    }

    subscribe(subscriber, event_name) {
        this.subscribers[event_name].push(subscriber)
    }

    notify(product_id, event_name) {
        if(this.items.length == 0) {
            this.element.innerHTML = ""
            const dugme = document.createElement("button")
            dugme.setAttribute("id","buy")
            dugme.innerText = "Buy"
            this.element.append(dugme)
            const totalP = document.createElement("div")
            totalP.setAttribute("id","totalP")
            this.element.append(totalP)

        }

        const subscribers = this.subscribers[event_name]
        if(event_name == "add_to_cart"){
            this.createCartItem(product_id)
            this.changeQuantity(product_id,"add_to_cart",-1)
            this.totalPrice()
   
        }
        else if(event_name == "increase"){
            const product = find_item(subscribers,product_id)
            if (product.stock > 0){
            this.changeQuantity(product_id,"increase",-1)
            this.totalPrice()
            }
        }
        else if(event_name == "decrease"){
            const item = find_item(this.items,product_id)
            this.changeQuantity(product_id,"decrease",1)
            this.totalPrice()
   
        } 
        else if(event_name == "delete"){
            this.removeItem(product_id)
            this.totalPrice()
        }
    }

    createCartItem(product_id){
        if(this.itemExists(product_id)){
            return false 
        }
        const product = find_item(this.subscribers["add_to_cart"],product_id)
        const newItem = new CartItem(product_id, product.title, product.price, product.image,product.type, 0)
        this.items.push(newItem)
        this.element.append(newItem.element)
        this.subscribe(newItem, "add_to_cart")
        this.subscribe(newItem, "increase")
        this.subscribe(newItem, "decrease")
        return true
    }

    itemExists(product_id){
        return find_item(this.items, product_id) != null
    }

    changeQuantity(product_id, event_name, stock_change) {
        const items = find_items(this.subscribers[event_name], product_id)
        items[0].changeQuantityEvent(stock_change)
        items[1].changeQuantityEvent(-stock_change)
    }

    removeItem(product_id){
        // reset stock
        const item = find_item(this.items,product_id)
        const bilo = item.quantity
        this.changeQuantity(product_id,"add_to_cart",bilo)

        // remove
        for(let itm of this.items){
            if(itm == item){
                const visak = this.items.indexOf(itm)
                this.items.splice(visak,1)
            } 
         item.element.remove()
        }

        // unsubscribe in all events
        for (let sub in this.subscribers){
            const visak = this.subscribers[sub].indexOf(item)
            this.subscribers[sub].splice(visak,1)
        }                                                      
    }

    noOfCartItems(product){
        let noOfItems = 0
        for(let item of this.items){
           noOfItems += item.quantity
        }

        if (noOfItems == 0){
            this.element.innerHTML = " <p> There are no curently products in cart list !</p> "
        }
        return noOfItems
    }

    showType(){
        const types = []
        let inp = ""
        for(let f of this.subscribers["add_to_cart"]){
            if(types.length === 0 || types.indexOf(f.type) === -1){
                types.push(f.type)  
            }     
        }
        for (let t of types){
            inp += `<input type="checkbox" name="ptype" id="${t}" checked> ${t} `
            
        }
        return inp

    }

    totalPrice(){
        const DivTotl = document.getElementById("totalP")
        let total = null
            for (let item of this.items){
                total += (item.quantity*item.price)
            }
         if(total == null){
          DivTotl.remove()
         } else {
            DivTotl.innerText = " Total price: " + total.toFixed(2) + " $ "
         }
            
    }
       
}



function find_items(items, item_id) {
    const found_items = [] 
    for(let item of items) {
        if(item.product_id == item_id) {
            found_items.push(item)
        }
    }
    return found_items
}

function find_item(items, item_id) {
    let found_item = null 
    for(let item of items) {
        if(item.product_id == item_id) {
            found_item = item 
            break 
        }
    }
    return found_item
}

const divProducts = document.querySelector("#products")
const divCartState = document.querySelector("#cartState")
divCartState.innerText = 0
const chType = document.querySelector("#listOfTipeCBX")
const CART = new Cart(document.querySelector("#cart"))




const products = []
for ( let barkod in PROIZVODI) {
    const p = PROIZVODI[barkod]
    products.push(new Product(barkod,p.product_name,p.product_price, p.product_image, p.product_image2, p.stock, p.product_type))
}

for(let product of products) {
    divProducts.append(product.element)
    CART.subscribe(product, "add_to_cart")
    CART.subscribe(product, "increase")
    CART.subscribe(product, "decrease")
}

chType.innerHTML = CART.showType(products)

document.body.addEventListener("click", (e) => {
    if(e.target.classList.contains("add-to-cart")) {
        const product_id = Number(e.target.getAttribute("data-product-id"))
        CART.notify(product_id, "add_to_cart")

    } // end event "ad-to-cart"
    else if(e.target.classList.contains("increase")){
        const item_id = Number(e.target.getAttribute("data-cart-item-id"))
        CART.notify(item_id, "increase")
    }// end event increase
    else if(e.target.classList.contains("decrease")){
        const item_id = Number(e.target.getAttribute("data-cart-item-id"))
        CART.notify(item_id, "decrease")    
    }// end event decrease
    else if(e.target.classList.contains("remove")){
        const item_id = Number(e.target.getAttribute("data-dremove"))
        CART.notify(item_id, "delete")
    }// end of remove event
    divCartState.innerText = CART.noOfCartItems()
    if(divCartState.innerText == 0){
        divCartState.style.color = "black"
    } else {
        divCartState.style.color = "red"
    }// end of No of cart items in cart event
    
    if(e.target.hasAttribute('name')){
        if(e.target.checked){
            const att = e.target.getAttribute("id")
            const hide = document.querySelectorAll(`.`+att+``)
            for(let p of hide){
                p.style.display = "flex"
            }
        } else{
            const att = e.target.getAttribute("id")
            const hide = document.querySelectorAll(`.`+att+``)
            for(let p of hide){
               p.style.display = "none"
            }
    
        }       
        
    } // end of show pType event

    if(e.target.id == "krp"){
        const ico = e.target.getAttribute("data-statusI")
        const cartShow = document.querySelector("#cart")
        if(ico == "skloni"){ 
            cartShow.style.display = "none"
            cartShow.setAttribute("data-statusC", "off")
            e.target.setAttribute("data-statusI", "prikazi")
        } else {
            cartShow.style.display = "inline-grid"
            cartShow.setAttribute("data-statusC", "on")
            e.target.setAttribute("data-statusI", "skloni")
        }


    }// end of show cart event

    if(e.target.classList.contains("details")){
        const divModalOutput = document.querySelector("#modalOutput")
        const modal_id = e.target.getAttribute("data-details")

        for(let product of products) {
              if(product.product_id == modal_id){
                const modalContent = product
                divModalOutput.append(product.modalelement)
                divModalOutput.style.width = "100vw"

              // SPLIDE set

                var splide = new Splide( '#main-carousel', {
                    pagination: false,
                  } );
            
            
                  var thumbnails = document.getElementsByClassName( 'thumbnail' );
                  var current;
            
            
                  for ( var i = 0; i < thumbnails.length; i++ ) {
                    initThumbnail( thumbnails[ i ], i );
                  }
            
            
                  function initThumbnail( thumbnail, index ) {
                    thumbnail.addEventListener( 'click', function () {
                      splide.go( index );
                    } );
                  }
            
            
                  splide.on( 'mounted move', function () {
                    var thumbnail = thumbnails[ splide.index ];
            
            
                    if ( thumbnail ) {
                      if ( current ) {
                        current.classList.remove( 'is-active' );
                      }
            
            
                      thumbnail.classList.add( 'is-active' );
                      current = thumbnail;
                    }
                  } );
            
            
                  splide.mount();

                // end of SPLIDE set

              }
        }       

    } // end of more Info event

   
})

