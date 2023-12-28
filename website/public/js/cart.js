document.addEventListener("DOMContentLoaded", async function () { 
    //llamo a cart del sessionStorage metiendolo en variable carrito
    let cart =  JSON.parse(sessionStorage.getItem("cart") || "[]");;
    console.log('carrito',cart)
    
    //funcionalidad carrito de compras
    const displayCart = () => {

        let cartContainer = document.querySelector('.cartContainer')
        cartContainer.classList.add('productContainerFather')

        for (let i = 0; i < cart.length; i++) {
            let item = cart[i]
            //sumo el precio total de todos los productos dentro de cart metiendolo en la variable subtotal
            let subtotal = item.product.price * item.quantity;
            console.log('item', item)
            
            let xmarkButton = document.createElement('button')
            xmarkButton.classList.add('eraseProduct')
            xmarkButton.addEventListener('click', function () {
                //borra del carrito de compras el producto
                cart.splice(i, 1)
                sessionStorage.setItem("cart", JSON.stringify(cart));
            })
            cartContainer.appendChild(xmarkButton)

            let xmarkIcon = document.createElement('i')
            xmarkIcon.classList.add('fa-solid', 'fa-xmark')
            xmarkButton.appendChild(xmarkIcon)

            let productContainer = document.createElement('div')
            productContainer.classList.add('productContainer')
            cartContainer.appendChild(productContainer)

            let imageTitleContainer = document.createElement('div')
            imageTitleContainer.classList.add('imageTitleContainer')
            productContainer.appendChild(imageTitleContainer)

            let productImage = document.createElement('img')
            productImage.classList.add('productImage')
            productImage.src = item.product.img
            productImage.alt = 'Obra de Arte'
            imageTitleContainer.appendChild(productImage)

            let productTitle = document.createElement('h4')
            productTitle.textContent = `${item.product.title}`
            imageTitleContainer.appendChild(productTitle)

            let productContainerData = document.createElement('div')
            productContainerData.classList.add('productContainerData')
            productContainer.appendChild(productContainerData)

            let productPrice = document.createElement('h5')
            productPrice.textContent = `Precio`
            productContainerData.appendChild(productPrice)

            let productPriceValue = document.createElement('p')
            productPriceValue.textContent = `$${item.product.price}`
            productContainerData.appendChild(productPriceValue)

            let productAuthor = document.createElement('h5')
            productAuthor.textContent = `Autor`
            productContainerData.appendChild(productAuthor)

            let productAuthorValue = document.createElement('p')
            productAuthorValue.textContent = `${item.product.artist.first_name} ${item.product.artist.last_name}`
            productContainerData.appendChild(productAuthorValue)

            let productQuantity = document.createElement('h5')
            productQuantity.textContent = `Cantidad`
            productContainerData.appendChild(productQuantity)

            // let add = document.createElement("button")
            // add.textContent = "+";
            // add.classList.add('buttons')
            // add.setAttribute('id', 'add')
            // add.addEventListener('click', function () {
            //     let currentNumber = parseInt(productQuantityValue.textContent);
            //     if (currentNumber > 1) {
            //         currentNumber++;
            //         productQuantityValue.textContent = currentNumber;
            //         item.quantity = currentNumber;
            //     }
            // } )
            // productContainerData.appendChild(add)

            let productQuantityValue = document.createElement('p')
            productQuantityValue.textContent = `${item.quantity}`
            productQuantityValue.style.color = 'black'
            productContainerData.appendChild(productQuantityValue)
        
            // let subtract = document.createElement("button")
            // subtract.textContent = "-";
            // subtract.classList.add('buttons')
            // subtract.setAttribute('id', 'subtract')
            // subtract.addEventListener('click', function () {

            //     let currentNumber = parseInt(productQuantityValue.textContent);
            //     if (currentNumber > 1) {
            //         currentNumber--;
            //         productQuantityValue.textContent = currentNumber;
            //     }
            // } )
            // productContainerData.appendChild(subtract)

            let subtotalTitle = document.createElement("h5")
            subtotalTitle.textContent = `Subtotal`
            productContainerData.appendChild(subtotalTitle)

            let subtotalValue = document.createElement('p')
            subtotalValue.textContent = `$${subtotal}`
            subtotalValue.style.color = 'black'
            productContainerData.appendChild(subtotalValue)
        }

        let totalCartContainerFather = document.createElement('div')
        totalCartContainerFather.classList.add('totalCartContainerFather')
        cartContainer.appendChild(totalCartContainerFather)

        let totalCartTitle = document.createElement('h3')
        totalCartTitle.textContent = `Total del Carrito`
        totalCartContainerFather.appendChild(totalCartTitle)

        let totalCartContainer = document.createElement('div')
        totalCartContainer.classList.add('totalCartContainer')
        totalCartContainerFather.appendChild(totalCartContainer)

        let totalToPay = document.createElement('p')
        totalToPay.textContent = `TOTAL A PAGAR`
        totalToPay.style.color = 'black'
        totalCartContainer.appendChild(totalToPay)

        //calculo el value de la variable total sumando todos los price de todos los productos, teniendo en cuenta su quantity
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i]
            total += item.product.price * item.quantity;
        }

        let totalToPayValue = document.createElement('p')
        totalToPayValue.textContent = `$${total}`
        totalToPayValue.style.color = 'black'
        totalCartContainer.appendChild(totalToPayValue)

        let purchaseButtonDiv = document.createElement('div')
        purchaseButtonDiv.classList.add('purchaseButton')
        cartContainer.appendChild(purchaseButtonDiv)

        let purchaseButton = document.createElement('button')
        purchaseButton.textContent = 'Comprar'
        purchaseButtonDiv.appendChild(purchaseButton)
    }
    displayCart()    
})