const productsData = [
    {
        header: "iphone 15",
        description: "sdxfcgvhbnjmkjmnbhgv",
        price: 120345,
    },

    {
        header: "iphone 215",
        description: "qwertyuiop",
        price: 180988,
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    for(let index = 0; index < productsData.length; index++) {
        let productItem = createProductCard(productsData[index])
        container.append(productItem)
    }
})

function createProductCard(productData) {
    let productWrapper = document.createElement('div');
    let header = document.createElement('h3');
    let describe = document.createElement('p');
    let priceWrapper = document.createElement('div');
    let wordPrice = document.createElement('span');
    let price = document.createElement('span');

    productWrapper.className = 'product';
    describe.className = 'description';
    priceWrapper.className = 'price-container';   
    price.className = 'price-value';   

    header.innerHTML = productData.header;
    describe.innerHTML = productData.description;
    wordPrice.innerHTML = 'Цена:';
    price.innerHTML = productData.price + " руб";

    priceWrapper.append(wordPrice);
    priceWrapper.append(price);

    productWrapper.append(header);
    productWrapper.append(describe);
    productWrapper.append(priceWrapper);

    return productWrapper;
}

