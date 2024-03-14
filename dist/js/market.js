const productContainer = document.querySelector('.pro-container');
const categoryItems = document.querySelectorAll('.category-item');

const products = [
    { id: 1, imgSrc: '../img/userProfile/gallery-1.jpg', artist: 'Alex Arnold', productName: 'Regret', price: '84$', category: 'Art NFTs' },
    { id: 2, imgSrc: '../img/userProfile/gallery-10.jpg', artist: 'Karim Benzema', productName: 'Gool', price: '199$', category: 'Gaming NFTs' },
    { id: 3, imgSrc: '../img/userProfile/gallery-11.jpg', artist: 'Kvein Dallas', productName: 'SuperStar', price: '77.5$', category: 'Art NFTs' },
    { id: 4, imgSrc: '../img/userProfile/gallery-5.jpg', artist: 'Leo Messi', productName: 'HERO', price: '100$', category: 'Gaming NFTs' },
    { id: 5, imgSrc: '../img/userProfile/gallery-6.jpg', artist: 'Crestiano Ronaldo', productName: 'Legend', price: '777$', category: 'Collectibles NFTs' },
    { id: 6, imgSrc: '../img/userProfile/gallery-7.jpg', artist: 'Toni Kroos', productName: 'StarShipping', price: '888$', category: 'Utility NFTs' },
    { id: 7, imgSrc: '../img/userProfile/gallery-8.jpg', artist: 'Lucka Mudric', productName: 'Broken Smile', price: '999$', category: 'Art NFTs' },
    { id: 8, imgSrc: '../img/userProfile/gallery-9.jpg', artist: 'Sergio Ramos', productName: 'Fury', price: '333$', category: 'Gaming NFTs' },
    { id: 9, imgSrc: '../img/userProfile/gallery-12.jpg', artist: 'Ellon Mask', productName: 'Happy', price: '357$', category: 'Collectibles NFTs' },
    { id: 10, imgSrc: '../img/userProfile/gallery-13.jpg', artist: 'Mohamamd', productName: 'Sad', price: '44.58$', category: 'Utility NFTs' },
    { id: 11, imgSrc: '../img/userProfile/gallery-14.jpg', artist: 'Ali', productName: 'Smoking', price: '552$', category: 'Collectibles NFTs' },
    { id: 12, imgSrc: '../img/userProfile/gallery-15.jpg', artist: 'Ellon Mask', productName: 'Angry', price: '256$', category: 'Utility NFTs' },
    { id: 13, imgSrc: '../img/userProfile/gallery-16.jpg', artist: 'Travis Sccot', productName: 'Travis', price: '9999$', category: 'Collectibles NFTs' },
    { id: 14, imgSrc: '../img/userProfile/gallery-17.jpg', artist: 'Mahdi', productName: 'Happy', price: '666$', category: 'Utility NFTs' },
    { id: 15, imgSrc: '../img/userProfile/gallery-18.jpg', artist: '2 pac', productName: 'Gang', price: '888$', category: 'Collectibles NFTs' },
    { id: 16, imgSrc: '../img/userProfile/gallery-19.jpg', artist: 'Aisan', productName: 'Happy', price: '586$', category: 'Art NFTs' },
    { id: 17, imgSrc: '../img/userProfile/gallery-20.jpg', artist: 'Ellon Mask', productName: 'Weed', price: '666$', category: 'Gaming NFTs' },
    { id: 19, imgSrc: '../img/userProfile/gallery-1.jpg', artist: 'Sina', productName: 'Happy', price: '132$', category: 'Utility NFTs' },
    { id: 18, imgSrc: '../img/userProfile/gallery-6.jpg', artist: 'Ellon Mask', productName: 'Happy', price: '7899$', category: 'Gaming NFTs' },
    { id: 20, imgSrc: '../img/userProfile/gallery-15.jpg', artist: 'Mhorg', productName: 'Rich', price: '22$', category: 'Art NFTs' },
]
// here i will add event for each product is products arr
categoryItems.forEach(cate => {
    cate.addEventListener('click', (e) => {
        // if clicked on AllBTn , show all the products
        if (e.target.textContent.trim() === 'All NFTs')
            generateProduct(products)
        // else show filterd products by product category
        else
            filterCategories(e.target.textContent.trim())
    })
})
// when page loaded , display items
document.addEventListener('DOMContentLoaded', generateProduct(products))

// this function  to generate the product cards based on data in array
function generateProduct(arr) {
    productContainer.innerHTML = ''
    arr.forEach(product => {
        return productContainer.insertAdjacentHTML('beforeend',
            `
            <div
                class="gallery-box w-[300px]  h-[170px] rounded-3xl"
                >
                <div class='h-full'>
                    <img
                        class="w-full h-full object-cover rounded-3xl "
                        src="${product.imgSrc}"
                        alt=""
                    />
                </div>
                <!-- text content -->
                <div class="product-text-content" data-${product.category}>
                    <h3 id="product-creator" class="text-sm text-white">
                    ${product.artist}
                    </h3>
                    <p class="text-white text-lg font-medium">
                    Product Name : <span id="">${product.productName}</span>
                    </p>
                    <p class="text-lg font-bold text-white" id="product-price">
                    ${product.price}
                    </p>
                </div>
                </div>
            `
        )

    })
}
// filter products by  category
function filterCategories(selected) {
    let filteredProducts = products.filter(pro => pro.category === selected);
    // if items includs with true category , display filterd items
    generateProduct(filteredProducts)
}


// slider function
// get items from DOM
const sliderBtns = document.querySelectorAll('.slider-btn');
const slider = document.querySelector('.slider-container');
// select clicked btn
sliderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productEl = document.querySelector('.gallery-box');
        // get product width with extra padding
        let productWidth = productEl.getBoundingClientRect().width + 30;
        // set scroll with product width 
        slider.scrollLeft +=
            btn.classList.contains('next-btn') ? -productWidth : +productWidth
    })
})