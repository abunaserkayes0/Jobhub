// use local storage to manage cart data
const addToDb = job => {
    const existCart = localStorage.getItem('shopping-cart');
    
    if (existCart) {
        const cartItems = JSON.parse(existCart);
        cartItems.push(job);
        localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
    } else {
        const cart = [job];
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    }
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    const carts = localStorage.getItem('shopping-cart');
    return JSON.parse(carts);
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
