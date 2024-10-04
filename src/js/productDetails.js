import { data } from "./db.js";
let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);

const productId=searchParams.get('id')||1;
let product=data.filter((ele)=>ele.id===+productId)[0]
const productDetailsBox=document.querySelector(".product-details-box")
const productName=document.querySelector(".product-name")
productName.textContent=product.category

let productDetails=`
<div
        class="container grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pb-9"
      >
        <div>
          <div>
            <img
              src=".${product.image}"
              alt="product_image"
              loading="lazy"
              class="main-img w-full"
            />
          </div>
          <div class="other-imges flex items-center gap-3 flex-wrap mt-6">
            <img
              src=".${product.image}"
              alt="product_image"
              loading="lazy"
              class="w-28 border-2 border-primary rounded cursor-pointer"
            />
            <img
              src="../images/products_images/product12.jpg"
              alt="product_image"
              loading="lazy"
              class="w-28 rounded cursor-pointer"
            />
            <img
              src="../images/products_images/product3.jpg"
              alt="product_image"
              loading="lazy"
              class="w-28 rounded cursor-pointer"
            />
            <img
              src="../images/products_images/product4.jpg"
              alt="product_image"
              loading="lazy"
              class="w-28 rounded cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h1 class="uppercase text-xl font-semibold">
            ${product.category}
          </h1>
          <div class="my-2">
            <span class="text-yellow-400 me-1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span class="text-sm text-gray-600">50 Reviews</span>
          </div>
          <div class="space-y-2">
            <p>
              <span class="text-lg font-semibold me-1">Availability:</span>
              <span class="text-green-600 font-medium">In Stock</span>
            </p>
            <p>
              <span class="text-lg font-semibold me-1">Brand:</span>
              <span class="font-medium text-gray-600">Bata</span>
            </p>
            <p>
              <span class="text-lg font-semibold me-1">Category:</span>
              <span class="font-medium text-gray-600">${product.category}</span>
            </p>
            <p>
              <span class="text-lg font-semibold me-1">SKU:</span>
              <span class="font-medium text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div class="flex gap-3 items-center my-2">
            <span class="text-gray-500 font-medium line-through"
              ><i class="fa-solid fa-dollar-sign"></i>${product.price+product.price*0.3}</span
            >
            <span class="text-primary text-xl font-bold"
              ><i class="fa-solid fa-dollar-sign"></i>${product.price}</span
            >
          </div>
          <p class="text-lg">${product.description}</p>
          <div class="mt-3">
            <p class="text-lg">Size:</p>
            <div class="flex gap-3 py-1">
              <div>
                  <input type="radio" name="size" value="xs" id="xs" class="hidden peer">
                  <label for="xs" class="grid place-content-center text-xs w-6 h-6 cursor-pointer rounded border border-gray-300 peer-checked:bg-primary peer-checked:text-white">XS</label>
              </div>
              <div>
                  <input type="radio" name="size" value="s" id="s" class="hidden peer">
                  <label for="s" class="grid place-content-center text-xs w-6 h-6 cursor-pointer rounded border border-gray-300 peer-checked:bg-primary peer-checked:text-white">S</label>
              </div>
              <div>
                  <input type="radio" name="size" value="m" id="m" class="hidden peer" checked>
                  <label for="m" class="grid place-content-center text-xs w-6 h-6 cursor-pointer rounded border border-gray-300 peer-checked:bg-primary peer-checked:text-white">M</label>
              </div>
              <div>
                  <input type="radio" name="size" value="l" id="l" class="hidden peer">
                  <label for="l" class="grid place-content-center text-xs w-6 h-6 cursor-pointer rounded border border-gray-300 peer-checked:bg-primary peer-checked:text-white">L</label>
              </div>
              <div>
                  <input type="radio" name="size" value="xl" id="xl" class="hidden peer">
                  <label for="xl" class="grid place-content-center text-xs w-6 h-6 cursor-pointer rounded border border-gray-300 peer-checked:bg-primary peer-checked:text-white">XL</label>
              </div>
              </div>
          </div>

          <div class="mt-3">
            <p class="text-lg">Color:</p>
            <div class="flex gap-3 py-1">
              <div>
                  <input type="radio" name="color" value="red" id="red" class="hidden peer">
                  <label for="red" class="block w-6 h-6 cursor-pointer rounded border border-gray-300 bg-primary peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary"></label>
              </div>
              <div>
                  <input type="radio" name="color" value="white" id="white" class="hidden peer" checked>
                  <label for="white" class="block w-6 h-6 cursor-pointer rounded border border-gray-300 bg-white peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary"></label>
              </div>
              <div>
                  <input type="radio" name="color" value="black" id="black" class="hidden peer">
                  <label for="black" class="block w-6 h-6 cursor-pointer rounded border border-gray-300 bg-black peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-primary"></label>
              </div>
          </div>
          </div>

          <div class="mt-5">
            <p class="text-lg">Quantity:</p>
            <div class="flex py-1">
              <span class="w-8 h-8 border grid place-content-center cursor-pointer hover:bg-primary hover:text-white transition"><i class="fa-solid fa-minus"></i></span>
              <span class="w-8 h-8 border grid place-content-center">4</span>
              <span class="w-8 h-8 border grid place-content-center cursor-pointer hover:bg-primary hover:text-white transition"><i class="fa-solid fa-plus"></i></span>
          </div>
          </div>

          <div class="flex gap-2 sm:gap-4 py-7 border-b ">
            <a href="#" class="uppercase p-2 bg-primary text-white cursor-pointer text-center border border-primary hover:bg-transparent hover:text-primary transition duration-300 rounded px-2 sm:px-6">
              <i class="fa-solid fa-cart-shopping me-2"></i>
              <span>add to cart</span>
            </a>
            <a href="#" class="uppercase p-2 bg-white text-primary cursor-pointer text-center border border-primary hover:bg-primary hover:text-white transition duration-300 rounded px-2 sm:px-6">
              <i class="fa-regular fa-heart me-2"></i>
              <span>wishlist</span>
            </a>
          </div>

          <div class="flex space-x-3 mt-4">
            <a href="#" class="w-8 h-8 rounded-full border grid place-content-center hover:bg-gray-300 transition">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full border grid place-content-center hover:bg-gray-300 transition">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full border grid place-content-center hover:bg-gray-300 transition">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
        </div>
      </div>
`
productDetailsBox.innerHTML=productDetails

let mainImg=document.querySelector(".main-img")
let otherImges=document.querySelectorAll(".other-imges img")
otherImges.forEach((ele)=>{
  ele.addEventListener("click",()=>{
    // remove border from all images
    otherImges.forEach((el)=>{
      el.classList.remove("border-2","border-primary")
    })
    ele.classList.add("border-2","border-primary")
    mainImg.src=`${ele.src}`
  })
})