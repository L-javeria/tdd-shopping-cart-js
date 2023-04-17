module.exports = class Cart {
    constructor(totalPrice, items){
        this.totalPrice = 0
        this.items = []
    }

    addItem(product, quantity){
        const product_item = {
            product : product,
            quantity : quantity 
        }
        this.items.push(product_item);
        this.totalPrice =+ product_item.product.price * product_item.quantity;
    }
}