import { data } from "./db.js";
let arrowUP=document.getElementById("arrowUP")

let indexPage=window.location.href.includes("index.html")

window.onscroll=()=>{
    if(scrollY>=300){
        arrowUP.classList.remove("hidden")
        arrowUP.classList.add("grid")
    }else{
        arrowUP.classList.add("hidden")
        arrowUP.classList.remove("grid")
    }
}
arrowUP.onclick=()=>{
    window.scrollTo(0,0)
}

let productsContainer=document.querySelector(".products-container")
let sliderProductsContainer=document.querySelector(".slider-products-container")

function addProductsToContainer(container,slider=false){
    if(container){
        container.innerHTML=''
        data.forEach((ele)=>{
    
            let discountBadge = '';
            // Determine the discount badge
            if (ele.discountPercentage) {
                discountBadge = ele.discountPercentage >= 50
                    ? `<span class="absolute z-[999] top-3 left-3 bg-yellow-400 py-1 px-3 rounded-md text-white uppercase">${ele.discountPercentage}%</span>`
                    : `<span class="absolute z-[999] top-3 left-3 bg-green-500 py-1 px-3 rounded-md text-white uppercase">${ele.discountPercentage}%</span>`;
            } else if (ele.tages) {
                discountBadge = `<span class="absolute z-[999] top-3 left-3 bg-primary py-1 px-3 rounded-md text-white uppercase">${ele.tages}</span>`;
            }
    
            let product=`
             <div class="shadow-md group select-none flex flex-col justify-between ${slider?"swiper-slide":null}">
                        <div class="relative cursor-pointer">
                            <img src="${indexPage?ele.image:"."+ele.image}" alt="product_image" loading="lazy" class="w-full">
    
                            <span class="absolute z-[999] top-3 right-3 w-8 h-8 rounded-full bg-white grid place-content-center cursor-pointer text-primary hover:bg-primary hover:text-white transition"><i class="fa-regular fa-heart text-xl"></i></span>
                            ${
                            discountBadge
                            }
                            
                            <div class="absolute inset-0 bg-slate-600/50 z-[99] opacity-0 group-hover:opacity-100 flex items-end transition duration-300">
                                <a href="${indexPage?"./pages":"."}/productDetails.html?id=${ele.id}" class="w-full bg-slate-900 text-white text-center p-2 cursor-pointer">
                                    <i class="fa-regular fa-eye"></i>
                                    <span class="capitalize">quick view</span>
                                </a>
                            </div>
                        </div>
    
                        <div class="p-4">
                            <a href="#" class="uppercase font-semibold text-xl hover:text-primary transition">${ele.category}</a>
                            <p class="capitalize my-1">${ele.description}</p>
                            <span class="text-primary font-semibold text-lg my-1">
                                <i class="fa-solid fa-dollar-sign"></i>
                                ${ele.price}
                            </span>
                            <div>
                                <span class="text-yellow-400 me-1">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <span>(${ele.quantity})</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <div class="uppercase p-2 bg-primary text-white cursor-pointer text-center border border-primary hover:bg-transparent hover:text-primary transition duration-300">
                                <i class="fa-solid fa-cart-shopping me-2"></i>
                                <span>add to cart</span>
                            </div>
                        </div>
                    </div>
            `
            container.innerHTML+=product
        })
    }
   
}

addProductsToContainer(productsContainer)
addProductsToContainer(sliderProductsContainer,true)

