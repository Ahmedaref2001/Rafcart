import {data} from "./db.js"
const cartContainer=document.querySelector(".cart-container")
cartContainer.innerHTML=''
data.forEach((ele)=>{
    let product=`
     <div class="grid grid-cols-12 gap-4 border rounded-md p-4 mb-6">
                    
                    <div class="flex md:items-center flex-col md:flex-row gap-4 col-span-12 md:col-span-6">
                      <img src=".${ele.image}" alt="product_image" loading="lazy" class="w-32 mx-auto md:mx-0">
                      <div class="space-y-1">
                          <a href="#" class="font-semibold text-xl hover:text-primary transition">
                             ${ele.category}
                          </a>
                          <p class="font-semibold text-primary"><i class="fa-solid fa-dollar-sign"></i>${ele.price}</p>
                          <p>Size: M</p>
                      </div>
                    </div>
                   
                    <div class="flex items-center justify-center col-span-6 sm:col-span-6 md:col-span-3">
                      <span class="border px-2 py-1 rounded-s border-e-0 border-gray-300 cursor-pointer hover:text-white hover:bg-primary transition duration-300"><i class="fa-solid fa-minus"></i></span>
                      <span class="border px-2 py-1 border-gray-300">4</span>
                      <span class="border px-2 py-1 rounded-e border-s-0 border-gray-300 cursor-pointer hover:text-white hover:bg-primary transition duration-300"><i class="fa-solid fa-plus"></i></span>
                    </div>
                      
                    <div class="flex items-center justify-center gap-5 col-span-6 sm:col-span-6 md:col-span-3">
                      <span class="text-primary lg:ms-auto flex items-center gap-1 font-bold text-xl"><i class="fa-solid fa-dollar-sign"></i>${4*ele.price}</span>
                      <a href="#" class="hover:text-primary   transition"><i class="fa-solid fa-trash-can"></i></a>  
                    </div>
                   
                  </div>
    `
    cartContainer.innerHTML+=product
})