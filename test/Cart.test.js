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

    //3rd Test Case
    it('should show Number of Items', () => {
        const cart = new Cart() 

        const item1 = new Item ('Handbag', 1500, true)
        const item2 = new Item ('Watch', 2000, false)
        cart.addItem(item1, 2)
        cart.addItem(item2, 4)
        
        expect(cart.itemQuantities()).to.deep.equal([
            'Handbag - x2', 
            'Watch - x4'
        ])
    })

        //4th Test Case
        it('should show quantity and price', () => {
            const cart = new Cart()
    
            const item1 = new Item ('Handbag', 500, true)
            const item2 = new Item ('Watch', 40000, false)
            cart.addItem(item1, 1)
            cart.addItem(item2, 2)
            
            expect(cart.itemizedList()).to.deep.equal([
                'Handbag x1 - $500', 
                'Watch x2 - $40000'
            ])
        })

        //5th Test Case
        it('should show quantity and price', () => {
            const cart = new Cart()
    
            const item1 = new Item ('Handbag', 500, true)
            const item2 = new Item ('Watch', 40000, false)
            cart.addItem(item1, 1)
            cart.addItem(item2, 2)
            
            expect(cart.totalPrice).to.be.equal(80500)
        })

})