import {data} from "./db.js";
const wishlistContainer=document.querySelector(".wishlist-container")
wishlistContainer.innerHTML=''
let productsData=data.slice(0,4)
productsData.forEach((ele)=>{
    let product=`
    <div class="flex flex-col sm:flex-row gap-4 sm:items-center flex-wrap lg:flex-nowrap border rounded-md p-4 mb-6">
                    
                    
                      <img src=".${ele.image}" alt="product_image" loading="lazy" class="w-32">
                      <div>
                          <a href="#" class="font-semibold text-lg hover:text-primary transition">
                              ${ele.category}
                          </a>
                          <p class="text-sm">Availability: <span class="text-green-600">In Stock</span></p>
                      </div>
                    
                    
                    
                      <span class="text-primary lg:ms-auto flex items-center gap-1 font-bold text-xl"><i class="fa-solid fa-dollar-sign"></i>${ele.price}</span>
                      
                      <div class="flex items-center flex-grow justify-between lg:flex-grow-0 gap-4">
                        <button class="py-2 w-36 text-white border border-primary bg-primary rounded hover:bg-white hover:text-primary transition duration-300"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                        <a href="#" class="hover:text-primary   transition"><i class="fa-solid fa-trash-can"></i></a>  
                      </div>
                     
            </div>
    `
    wishlistContainer.innerHTML+=product
})