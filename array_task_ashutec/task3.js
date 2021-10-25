const product = [
    {
        id: 1,
        product_name: 'mobile',
        price: 10000,
        rating: 3,
        available: 1,
        image: 'https://image.shutterstock.com/image-photo/mobile-smart-phone-on-white-260nw-1311685394.jpg',
    },
    {
        id: 2,
        product_name: 'headPhone',
        price: 3000,
        rating: 4.2,
        available: 1,
        image: 'data:image/jpeg;base64,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',
    },
    {
        id: 3,
        product_name: 'tv',
        price: 30000,
        rating: 4.7,
        available: 0,
        image: 'data:image/jpeg;base64,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10s4IMVDnmwDZgPCOEz+CsqncuaRArAHeKTp2b3/ABKxb3JhttX8L86YonEhP11s2xtXZAugCRltyHxC9Gu1mgiKg/cG0Gfp74U35pm/Wj91+dPmmH1s/dfnTFCxCfrrZuTU5jcGB2mC7PbK9+Wtm5NScPoNg75h3vUz5ph9aP3X50+aYfWz91+dMULET5a2bHCrzC4323viBgsTrrZt1T1G4YD9r8FN+acfWz91+dPmnH1s/dfnTFCyIDtc7McYqdFwT6ZXh10s8ZVD+4BhPT7VY/NOPrR+6/OuJ1q1arWF0PZfpnwajfBdzEYlp5j5pU2GKOjdrlZ91Q9LR/Ryi27Wqi9j2NFSXMc0SBmWkCcd5UHU3V6jbiWG0cHVbxrhp3g9g2tdfE84gHzLrH9ylpj9ZAwAwoxltPHzSxGKLjuUuHeDRuqVAeYyD7CPSu1VHqpoAWKhwAeXy9zi4tu4kAQBJjBo2q8UlgiIgCIqrT2lhZqRqXH1HE3WMY1znPcchDQYG87PQCBF1p1jp2GlffxnukU2Ti5287mjaf6kBfPdWtXq2k6zrZanO4IuxOIvxlTp8mmMiRzgGZImaM1TtVutBtdvDmMwNw4Oc0eDTa2ZYwbZxxO0ly+n0aTWNDGgNa0ANAEAAYAADIICLo7RFCzzwNJlO9ncaBPSrBEQBERAEREAREQBERAEREAREQBERAEREAUS36PpV28HVY17ZmHCRKlogPlGuupTrO7v6wgtDDecxmdMj/cpjk727NmGXUaj64NtrODeQ2uwcZuxw5bObeNi69fMdbdR6tOqLbo8EPDrzqbSAWu2vpyQIO1vOY3ID6ci5zVTTz7SwtrUn0rQyBUY9jmz+2y8MWnq84J6NAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q==',
    },
    {
        id: 4,
        product_name: 'cpu',
        price: 4000,
        rating: 5,
        available: 0,
        image: 'https://m.media-amazon.com/images/I/41VqxZ2lUlL.jpg',
    },
    {
        id: 5,
        product_name: 'mouse',
        price: 800,
        rating: 4,
        available: 1,
        image: 'data:image/jpeg;base64,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',
    },
    {
        id: 6,
        product_name: 'laptop',
        price: 42000,
        rating: 4.5,
        available: 0,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
        id: 7,
        product_name: 'keyboard',
        price: 1499,
        rating: 3.9,
        available: 1,
        image: 'https://cdn.shopify.com/s/files/1/1920/0265/products/ZoomTextKeyboard-WhiteonBlack_ISO_sq_600x600.jpg?v=1617899402',
    },
    {
        id: 8,
        product_name: 'Desktop',
        price: 60000,
        rating: 4.1,
        available: 0,
        image: 'https://5.imimg.com/data5/ZV/EC/DH/SELLER-3866941/desktop-computer-500x500.jpg',
    },
    {
        id: 9,
        product_name: 'hardisk',
        price: 4999,
        rating: 4,
        available: 1,
        image: 'https://cdn.pixabay.com/photo/2013/07/12/19/16/hdd-154463__340.png',
    },
    {
        id: 10,
        product_name: 'ipad',
        price: 80000,
        rating: 4.8,
        available: 1,
        image: 'https://www.techrepublic.com/a/hub/i/r/2018/08/23/adcb4501-22f4-415b-926a-3ac4d1e50ed9/resize/1200x900/a5b282ded46918c72ddf33c71c54214b/1-ipad.jpg',
    }
]

const cartInput = document.querySelector('.cart_input');
const addCart = document.querySelector('.add_cart');
const delInput = document.querySelector('.del_input');
const btn_delete = document.querySelector('.delete');
const discInput = document.querySelector('.input_disc');
const getDiscount = document.querySelector('.discount');
const showCart = document.querySelector('.show_cart');
const row = document.querySelector('tbody');
const display_discount = document.querySelector('.btn_discount');
const show_price = document.querySelector('.btn_price');
const total_price = document.querySelector('.btn_total');
const btn_update = document.querySelector('.update');

// const error = document.querySelector('.err');
//update
const id = document.getElementById('idForUpdate');

const add = document.querySelector('.add');
const table = document.querySelectorAll('.table');

let cart = [];
row.innerHTML = '';

const updateUI = function (product) {
    const html = ` <tr class="row_${product.id} ">
        <th scope="row">${product.id}</th>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        <td>${product.available === 0 ? 'Not-Available' : 'Available'}</td>
        <td><image class="all_images" src=${product.image}></image></td> 
        <td><button id="${product.id}" value="update" class="update">Update</button></td>
       
        <td><button id="${product.id}" value="delete" class="delete">Delete</button></td></tr>
        `


    row.insertAdjacentHTML('beforeend', html);


}






addCart.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(cart);
    // document.querySelector('.err').classList.add('hide_err');
    const checkRepeat = cart.some(val => val.id === Number(cartInput.value));
    const available = product.find(val => val.id === Number(cartInput.value));
    // console.log(checkRepeat, available);
    if (checkRepeat) {
        console.log(`${cartInput.value} is already exist`);
        addCart.insertAdjacentHTML('afterend', '<p class="err">!Enter Valid Id </p>');
    } else if (available) {
        // const add = available.
        cart.push(available);
        updateUI(available);


    }
    cartInput.value = '';
    console.log(cart);
});

// btn_delete.addEventListener('click', function (e) {
//     console.log(e);
// })


document.querySelector('tbody').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.value === "delete") {
        const exist = cart.some(val => val.id === Number(e.target.id))
        if (exist) {
            const index = cart.findIndex(val => val.id === Number(e.target.id))
            cart.splice(index, 1);
            row.innerHTML = '';
            cart.forEach(val => updateUI(val));
        }
    }

    else if (e.target.value === "update") {

        console.log(`update pressed at ${e.target.id}`);
        document.querySelector('.pop-up').classList.remove("hidden");
        //     const newRow = `<tr class="data_update">   
        //     <form method="post">     
        //    <td> <input type="text"  id="newId" ></td>
        //    <td> <input type="text" id="newName" ></td>
        //    <td><input type="number" id="newPrice" ></td>
        //    <td><div><input type="radio" name="availability" id="aval" value="Available" />
        //     <label>Available</label> </div></td>
        //      <td><div><input type="radio" name="availability" id="not-aval" value="not-Available" />
        //     <label>Not-Available</label></div></td> 
        //     <td> <button class="add">update data</button> </td>
        //     </form>
        //          </tr>`

        const target_row = e.target.closest('tr');
        // target_row.insertAdjacentHTML('afterend', newRow);
        const newId = document.getElementById('newId')
        const newProduct = document.getElementById('newName');
        const newPrice = document.getElementById('newPrice');
        const target_update = e.target.id;
        let find_data = product.find(val => val.id === Number(target_update))
        newId.value = `${find_data.id}`
        newId.disabled = true;
        newProduct.value = `${find_data.product_name}`;
        newPrice.value = `${find_data.price}`;
        find_data.available === 1 ? document.getElementById('aval').checked = true : document.getElementById('not-aval').checked = true;

        document.querySelector('.add').addEventListener('click', function (e) {
            e.preventDefault();
            // let find_data = product.find(val => val.id === Number(target_update))

            find_data.product_name = newProduct.value;
            find_data.price = Number(newPrice.value);
            find_data.available = document.getElementById('aval').checked === true ? 1 : 0;
            document.querySelector('.pop-up').classList.add("hidden");
            console.log(target_row);
            target_row.remove();
            updateUI(find_data);
            console.log(find_data);
        })

    }

})

getDiscount.addEventListener('click', function (e) {
    e.preventDefault();
    row.innerHTML = '';
    if (discInput.value >= 0 && discInput.value <= 100) {
        let total = cart.filter(val => val.available === 1).reduce((acc, val) => acc + val.price, 0)
        show_price.textContent = total;

        const discount = (total * discInput.value / 100);
        total = total - discount;
        display_discount.textContent = discount;
        total_price.textContent = total;
        // console.log(`Your discount = ${discount} and Bill value is : ${total}`);

        cart.forEach(val => updateUI(val));
    } else {
        getDiscount.insertAdjacentHTML('afterend', '<p class="err">Discount only between >0 and <100</p>');
        cart.forEach(val => updateUI(val));
    }
    discInput.value = '';
})


// btn_update.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (id.value === '') {
//         btn_update.insertAdjacentHTML('afterend', '<p class="err">!Enter Id</p>');
//     } else {
//         document.querySelector('.data_update').classList.remove("hidden");
//         let find_data = product.find(val => val.id === Number(id.value))
//         console.log(find_data);
//         newId.value = `${find_data.id}`
//         newId.disabled = true;
//         newProduct.value = `${find_data.product_name}`;
//         newPrice.value = `${find_data.price}`;
//         find_data.available === 1 ? document.getElementById('aval').checked = true : document.getElementById('not-aval').checked = true;


//         const add_data = document.querySelector('.add');
//         add_data.addEventListener('click', function (e) {
//             e.preventDefault();
//             find_data.product_name = newProduct.value;
//             find_data.price = newPrice.value;
//             find_data.available = document.getElementById('aval').checked === true ? 1 : 0;
//             updateUI(find_data);
//             console.log(find_data);
//             document.querySelector('.data_update').classList.add("hidden");
//         })

//         id.value = '';
//     }
// })


showCart.addEventListener('click', function (e) {
    e.preventDefault();
    row.innerHTML = '';
    cart = cart.filter(val => val.available === 1);
    cart.forEach(val => updateUI(val));
    console.log(cart);
});

document.getElementById('available').addEventListener('change', function (e) {
    e.preventDefault();
    console.log(cart);
    if (this.value === 'id' || this.value === 'price') {
        row.innerHTML = '';
        cart.sort((a, b) => a[this.value] - b[this.value]).forEach(val => updateUI(val))
    }
    else if (this.value === 'productName') {
        row.innerHTML = '';
        cart.sort((a, b) => a.product_name > b.product_name ? 1 : -1).forEach(val => updateUI(val));
    }
});
// console.log(cart);
// document.getElementById('by_id').addEventListener('click', function (e) {
//     e.preventDefault();
//     row.innerHTML = '';
//     cart.sort((a, b) => a.id - b.id).forEach(val => updateUI(val))
// });

// document.getElementById('by_name').addEventListener('click', function (e) {
//     e.preventDefault();
//     row.innerHTML = '';
//     cart.sort((a, b) => a.product_name > b.product_name ? 1 : -1).forEach(val => updateUI(val));
// });

// document.getElementById('by_price').addEventListener('click', function (e) {
//     e.preventDefault();
//     row.innerHTML = '';
//     cart.sort((a, b) => a.price - b.price).forEach(val => updateUI(val))
// });
