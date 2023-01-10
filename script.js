const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
const products = document.getElementById('products')



for (const item of storeItems){

    //creates outer div
    let div = document.createElement('div');
    div.className = "outer";

    //creates price div
    let price = document.createElement('div');
    price.className = "price";
    price.innerHTML = `$${item.price}`;

    //creates name div
    let name = document.createElement('div');
    name.className = "name";
    name.innerHTML = `${item.name}`;

    //creates details div
    let details = document.createElement('div');
    details.className = "details";
    details.innerHTML = `${item.details}`;

    //separates inStock and notInStock
    if(item.inStock){
        div.classList.add('inStock')
    }
    else{
        div.classList.add('notInStock')
    }

    //appends the name, price, and details divs to the outer div
    div.appendChild(price)
    div.appendChild(name)
    div.appendChild(details)

    //appends the outer div to the original div
    

    products.appendChild(div);
}

// toggle dark mode
const darkMode = document.getElementById('darkMode')


darkMode.addEventListener('click', function() {
    const divs = document.querySelectorAll('div.outer');
    divs.forEach(function(div) {
      div.classList.toggle('dark');
    });
    document.getElementById('wholeBody').classList.toggle('darker')
    document.getElementById('line').classList.toggle('white')

  });