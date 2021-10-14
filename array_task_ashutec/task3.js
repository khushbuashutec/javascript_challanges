const product = [
    {
        id: 1,
        product_name: 'mobile',
        price: 10000,
        rating: 3,
        available: 1
    },
    {
        id: 2,
        product_name: 'headPhone',
        price: 3000,
        rating: 4.2,
        available: 1
    },
    {
        id: 3,
        product_name: 'mobile cover',
        price: 300,
        rating: 4.7,
        available: 0
    },
    {
        id: 4,
        product_name: 'earbud',
        price: 4000,
        rating: 5,
        available: 0
    },
    {
        id: 5,
        product_name: 'cable',
        price: 100,
        rating: 4,
        available: 1
    },
    {
        id: 6,
        product_name: 'charger',
        price: 1200,
        rating: 4.5,
        available: 0
    },
    {
        id: 7,
        product_name: 'speaker',
        price: 5000,
        rating: 3.9,
        available: 1
    },
    {
        id: 8,
        product_name: 'adapter',
        price: 380,
        rating: 4.1,
        available: 0
    },
    {
        id: 9,
        product_name: 'pendrive',
        price: 800,
        rating: 4,
        available: 1
    },
    {
        id: 10,
        product_name: 'ipad',
        price: 80000,
        rating: 4.8,
        available: 1
    }
]

const cartInput = document.querySelector('.cart_input');
const addCart = document.querySelector('.add_cart');
const delInput = document.querySelector('.del_input');
const btn_delete = document.querySelector('.delete');
const discInput = document.querySelector('.input_disc');
const getDiscount = document.querySelector('.discount');
const showCart = document.querySelector('.show_cart');
const cart = [];


addCart.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(cart);
    const checkRepeat = cart.some(val => val.id === Number(cartInput.value));
    const available = product.find(val => val.id === Number(cartInput.value));
    // console.log(checkRepeat, available);
    if (checkRepeat) {
        console.log(`${cartInput.value} is already exist`);
    } else if (available) {
        // const add = available.
        cart.push(available);
    }
    console.log(cart);
})

