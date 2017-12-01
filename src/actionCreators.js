const addToCart = producto => {
    return{
        type: "ADD_TO_CART",
        producto
    };
};

const removeFromCart = producto=> {
    return{
        type:"REMOVE_FROM_CART",
        producto
    };
};
export { addToCart, removeFromCart };