const productContainer = document.querySelector('.pro-container');
const categoryItems = document.querySelectorAll('.category-item');



const products = [
  { id: 1, imgSrc: '../img/userProfile/gallery-1.jpg', artist: 'Alex Arnold', productName: 'Regret', price: '84$', category: 'Art NFTs', profileImg: '../img/userProfile/prof-1.jpg' },
  { id: 2, imgSrc: '../img/userProfile/gallery-10.jpg', artist: 'Karim Benzema', productName: 'Gool', price: '199$', category: 'Gaming NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
  { id: 3, imgSrc: '../img/userProfile/gallery-11.jpg', artist: 'Kvein Dallas', productName: 'SuperStar', price: '77.5$', category: 'Art NFTs', profileImg: '../img/userProfile/prof-3.jpg' },
  { id: 4, imgSrc: '../img/userProfile/gallery-5.jpg', artist: 'Leo Messi', productName: 'HERO', price: '100$', category: 'Gaming NFTs', profileImg: '../img/userProfile/prof-4.jpg' },
  { id: 5, imgSrc: '../img/userProfile/gallery-6.jpg', artist: 'Crestiano Ronaldo', productName: 'Legend', price: '777$', category: 'Collectibles NFTs', profileImg: '../img/userProfile/prof-1.jpg' },
  { id: 6, imgSrc: '../img/userProfile/gallery-7.jpg', artist: 'Toni Kroos', productName: 'StarShipping', price: '888$', category: 'Utility NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
  { id: 7, imgSrc: '../img/userProfile/gallery-8.jpg', artist: 'Lucka Mudric', productName: 'Broken Smile', price: '999$', category: 'Art NFTs', profileImg: '../img/userProfile/prof-5.jpg' },
  { id: 8, imgSrc: '../img/userProfile/gallery-9.jpg', artist: 'Sergio Ramos', productName: 'Fury', price: '333$', category: 'Gaming NFTs', profileImg: '../img/userProfile/prof-3.jpg' },
  { id: 9, imgSrc: '../img/userProfile/gallery-12.jpg', artist: 'Ellon Mask', productName: 'Happy', price: '357$', category: 'Collectibles NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
  { id: 10, imgSrc: '../img/userProfile/gallery-13.jpg', artist: 'Mohamamd', productName: 'Sad', price: '44.58$', category: 'Utility NFTs', profileImg: '../img/userProfile/prof-4.jpg' },
  { id: 11, imgSrc: '../img/userProfile/gallery-14.jpg', artist: 'Ali', productName: 'Smoking', price: '552$', category: 'Collectibles NFTs', profileImg: '../img/userProfile/prof-3.jpg' },
  { id: 12, imgSrc: '../img/userProfile/gallery-15.jpg', artist: 'Ellon Mask', productName: 'Angry', price: '256$', category: 'Utility NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
  { id: 13, imgSrc: '../img/userProfile/gallery-16.jpg', artist: 'Travis Sccot', productName: 'Travis', price: '9999$', category: 'Collectibles NFTs', profileImg: '../img/userProfile/prof-4.jpg' },
  { id: 14, imgSrc: '../img/userProfile/gallery-17.jpg', artist: 'Mahdi', productName: 'Happy', price: '666$', category: 'Utility NFTs', profileImg: '../img/userProfile/prof-1.jpg' },
  { id: 15, imgSrc: '../img/userProfile/gallery-18.jpg', artist: '2 pac', productName: 'Gang', price: '888$', category: 'Collectibles NFTs', profileImg: '../img/userProfile/prof-5.jpg' },
  { id: 16, imgSrc: '../img/userProfile/gallery-19.jpg', artist: 'Aisan', productName: 'Happy', price: '586$', category: 'Art NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
  { id: 17, imgSrc: '../img/userProfile/gallery-20.jpg', artist: 'Ellon Mask', productName: 'Weed', price: '666$', category: 'Gaming NFTs', profileImg: '../img/userProfile/prof-1.jpg' },
  { id: 19, imgSrc: '../img/userProfile/gallery-1.jpg', artist: 'Sina', productName: 'Happy', price: '132$', category: 'Utility NFTs', profileImg: '../img/userProfile/prof-4.jpg' },
  { id: 18, imgSrc: '../img/userProfile/gallery-6.jpg', artist: 'Ellon Mask', productName: 'Happy', price: '7899$', category: 'Gaming NFTs', profileImg: '../img/userProfile/prof-5.jpg' },
  { id: 20, imgSrc: '../img/userProfile/gallery-15.jpg', artist: 'Mhorg', productName: 'Rich', price: '22$', category: 'Art NFTs', profileImg: '../img/userProfile/prof-2.jpg' },
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
/////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////
// set animation to banner textcontetn
const bannertText = document.querySelector('.banner-text-content');
document.addEventListener('scroll', () => {
  let currentScroll = 350;
  let scrollHight = scrollY;
  scrollHight >= currentScroll ?
    bannertText.classList.add('show-animation') :
    bannertText.classList.remove('show-animation');
})

/////////////////////////////////////////////////////////////////////////////////////
// Collectibles NFTs
const collectiblesItems = document.querySelector('.collectibles-items');
const gamingItems = document.querySelector('.gameing-items');


function generateCollcetiable(arr, container) {
  container.innerHTML = ''
  arr.forEach(product => {
    return container.insertAdjacentHTML('beforeend',
      `
            <div
              class="md:h-[340px] h-[280px] relative rounded-3xl bg-transparent showcase w-full"
            >
            <!-- user info  -->
            <div
              class="w-full flex flex-col items-center justify-center h-1/2 gap-y-1"
            >
              <!-- user profile container -->
              <div
                class="w-[100px] md:w-[70px] h-[100px] md:h-[70px] rounded-full overflow-hidden absolute md:-top-[35px] -top-[50px] showcase-profile"
              >
                <img
                  class="w-full h-full object-cover"
                  src="${product.profileImg}"
                  alt="user image"
                />
              </div>
              <!-- user name and other describtion -->
              <div class="">
                <p class="text-white text-2xl font-semibold text-center">
                 ${product.artist}
                </p>
                <p class="text-white text-sm font-semibold text-center">
                 ${product.productName} , ${product.price}
                </p>
              </div>
            </div>
            <!-- user banner -->
            <div class="w-full h-1/2 rounded-3xl bg-blue-color">
              <img
                class="w-full h-full object-cover rounded-3xl"
                src="${product.imgSrc}"
                alt=""
              />
            </div>
          </div>
            `
    )

  })
}


function onlyCollectiables(arr) {
  const collectiblesProducts = arr.filter(pro => pro.category === 'Collectibles NFTs');
  generateCollcetiable(collectiblesProducts.slice(0, 4), collectiblesItems)
}
onlyCollectiables(products)
onlyGaming(products)
function onlyGaming(arr) {
  const collectiblesProducts = arr.filter(pro => pro.category === 'Art NFTs');
  generateCollcetiable(collectiblesProducts.slice(0, 4), gamingItems)
}
