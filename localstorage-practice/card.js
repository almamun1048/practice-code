

const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = ''
    return inputValue;
}

const addProduct = ()=>{
const product = getInputValueById('product-name-field');
const  quantity = getInputValueById('product-quantity-field');
displayProduct(product,quantity)
saveLocalStorage(product,quantity)
}

const displayProduct = (product,quantity)=>{
    const productContainer = document.getElementById('product-container')
    const productList = document.createElement('li')
    productList.innerText = `${product} : ${quantity}`
    productContainer.appendChild(productList);
}

const getCartFromLocalstorage = ()=>{
    const savedCart = localStorage.getItem('cart')
    let cart = {}
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart
}

const saveLocalStorage = (product,quantity)=>{
    const card = getCartFromLocalstorage()
    card[product] = quantity
    const stringifyedCard = JSON.stringify(card)
    localStorage.setItem('cart',stringifyedCard)
}

const displayStoredProducts = ()=>{
    const card = getCartFromLocalstorage()

    for(const product in card){
        const quantity = card[product]
        displayProduct(product,quantity)
    }
}

displayStoredProducts()