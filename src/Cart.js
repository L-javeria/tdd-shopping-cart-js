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
        this.totalPrice += (product_item.product.price) * (product_item.quantity);
    }

    itemQuantities(){
        return this.items.map((product_item => {
            return `${product_item.product.name} - x${product_item.quantity}`;
        })
        )
    }

    itemizedList(){
        return this.items.map(product_item => {
            return `${product_item.product.name} x${product_item.quantity} - $${product_item.product.price}`
        }) 
    }

    onSaleItems(){

        let SaleFilter = this.items.filter(product_item => product_item.product.onSale)
        let result = SaleFilter.map(product_item =>  {
            return `${product_item.product.name} x${product_item.quantity} - $${((product_item.product.price) / 2)}`;
    })
        return result;
    }
}