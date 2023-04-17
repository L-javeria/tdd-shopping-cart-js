const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {
    
    //1st test Case
    it('should initialize as empty', () => {
        const cart = new Cart()

        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    })

    //2nd Test Case
    it('should show the added item', () => {
        const cart = new Cart()

        const item1 = new Item ('Handbag', 1500, false)
        cart.addItem(item1, 2)
        expect(cart.totalPrice).to.be.equal(3000)
    })

})