document.addEventListener("DOMContentLoaded", async function() {

    //fetch productos desde API
    const data = await fetch('/api/productList')
    const products = await data.json()
    console.log('products', products)
    // console.log(product)

    //CARRITO DE COMPRAS
    let cart =  JSON.parse(sessionStorage.getItem("cart") || "[]");;
    console.log('carrito',cart)

    //productDetail por js front
    const displayDetail = () => {
        let product = products.find(product => product.id == location.pathname.replace("/productdetail/", ""))
        
        console.log('product', product)
        
        let divContainer = document.querySelector('.container')
        divContainer.innerHTML = '';
    
        let artwork = document.createElement("div");
        artwork.classList.add("artwork");
        divContainer.appendChild(artwork);
        
        let img = document.createElement("img");
        img.src = product.img;
        img.alt = 'Obra de Arte';
        img.classList.add('artwork-image')
        artwork.appendChild(img)
    
        let containerRight = document.createElement("div")
        containerRight.classList.add("container-right")
        artwork.appendChild(containerRight)
    
        let artworkDetails = document.createElement("div")
        artworkDetails.classList.add("artwork-details")
        containerRight.appendChild(artworkDetails)
    
        let artworkTitle = document.createElement("h2")
        artworkTitle.textContent = product.title;
        artworkTitle.classList.add('artwork-title')
        artworkDetails.appendChild(artworkTitle)
    
        let artworkArtist = document.createElement("p")
        artworkArtist.textContent = `Artista: ${product.artist.first_name} ${product.artist.last_name}`;
        artworkArtist
        artworkArtist.classList.add('artwork-artist')
        artworkDetails.appendChild(artworkArtist)
    
        let artworkPrice = document.createElement("p")
        artworkPrice.textContent = `Precio: $${product.price}`;
        artworkPrice.classList.add('artwork-price')
        artworkDetails.appendChild(artworkPrice)
    
        let artworkDescription = document.createElement("p")
        artworkDescription.textContent = `Descripción: ${product.description}`;
        artworkDescription.classList.add('artwork-description')
        artworkDetails.appendChild(artworkDescription)
    
        let containerButton = document.createElement("div")
        containerButton.classList.add("container-button")
        containerRight.appendChild(containerButton)
    
        let add = document.createElement("button")
        add.textContent = "+";
        add.classList.add('buttons')
        add.setAttribute('id', 'add')
        add.addEventListener('click', function () {
            let currentNumber = parseInt(number.textContent);
      
            if (currentNumber > 0) {
                currentNumber++;
    
                number.textContent = currentNumber;
            }
        } )
        containerButton.appendChild(add)
    
        let number = document.createElement("p")
        number.textContent = 1;
        number.classList.add('number')
        containerButton.appendChild(number)
    
        let subtract = document.createElement("button")
        subtract.textContent = "-";
        subtract.classList.add('buttons')
        subtract.setAttribute('id', 'subtract')
        subtract.addEventListener('click', function () {
            let currentNumber = parseInt(number.textContent);
      
            if (currentNumber > 1) {
                currentNumber--;
    
                number.textContent = currentNumber;
            }
        } )
        containerButton.appendChild(subtract)
    
        let addToCart = document.createElement("button")
        addToCart.textContent = "Agregar al carrito";
        addToCart.classList.add('addToCart')
        addToCart.classList.add('carrito')
        addToCart.addEventListener('click', function () {
            let productAdded = { product: product, quantity: number.textContent }
            cart = cart.filter(item => item.product.id!= product.id)
            
            cart.push(productAdded)

            sessionStorage.setItem("cart", JSON.stringify(cart));
            console.log('carrito',cart)
        })
        containerRight.appendChild(addToCart)
    }
    
    displayDetail()
});