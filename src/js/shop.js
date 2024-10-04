const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
let rangeInputs;
let progress;
let minMaxInputs;

//remove and add sidebar from dom tree
const sidebarContent=`  <div class="pb-4">
            <h2 class="font-semibold text-xl mb-3 uppercase">Categories</h2>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="cursor-pointer rounded text-primary focus:ring-0"
                />
                <label for="cat-1" class="cursor-pointer">Women</label>
                <span class="ms-auto">(16)</span>
              </li>
              <li class="flex items-center gap-2">
                <input type="checkbox" id="cat-2" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="cat-2" class="cursor-pointer">Men</label>
                <span class="ms-auto">(9)</span>
              </li>

              <li class="flex items-center gap-2">
                <input type="checkbox" id="cat-3" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="cat-3" class="cursor-pointer">Shoes</label>
                <span class="ms-auto">(19)</span>
              </li>

              <li class="flex items-center gap-2">
                <input type="checkbox" id="cat-4" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="cat-4" class="cursor-pointer">Computer</label>
                <span class="ms-auto">(35)</span>
              </li>
            </ul>
          </div>

          <div class="py-4">
            <h2 class="font-semibold text-xl mb-3 uppercase">Brands</h2>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="brand-1"
                  class="cursor-pointer rounded text-primary focus:ring-0"
                />
                <label for="brand-1" class="cursor-pointer">Adidas</label>
              </li>
              <li class="flex items-center gap-2">
                <input type="checkbox" id="brand-2" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="brand-2" class="cursor-pointer">Nike</label>
              </li>

              <li class="flex items-center gap-2">
                <input type="checkbox" id="brand-3" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="brand-3" class="cursor-pointer">Easy</label>
              </li>

              <li class="flex items-center gap-2">
                <input type="checkbox" id="brand-4" class="cursor-pointer rounded text-primary focus:ring-0" />
                <label for="brand-4" class="cursor-pointer">Arong</label>
              </li>
            </ul>
          </div>

          <div class="py-4">
            <h2 class="font-semibold text-xl mb-3 uppercase">Price</h2>
            <div>
                <div class="my-5">

                    <div class="flex items-center justify-between mb-1">
                        <span>1$</span>
                        <span>1000$</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full relative">
                        <span class="progress block rounded-full h-2 bg-primary absolute top-0"></span>
                        <input type="range" min="1" value="200" max="1000" class="minVal absolute -top-3 h-8 w-full cursor-pointer appearance-none range-input">
                        <input type="range" min="1" value="600" max="1000" class="maxVal absolute -top-3 h-8 w-full cursor-pointer appearance-none range-input">
                    </div>

                </div>

                <div class="min-max-inputs flex items-center gap-2">
                    <div class="flex items-center gap-1">
                        <label>Min</label>
                        <input type="number" class="min-input w-20 py-1 border-gray-400 focus:border-gray-600 focus:shadow focus:ring-0" value="200">
                    </div>
                    <i class="fa-solid fa-minus"></i>
                    <div class="flex items-center gap-1">
                        <label>Max</label>
                        <input type="number" class="max-input w-20 py-1 border-gray-400 focus:border-gray-600 focus:shadow focus:ring-0" value="600">
                    </div>
                </div>
            </div>
          </div>

          <div class="py-4">
            <h2 class="font-semibold text-xl mb-3 uppercase">Size</h2>
            <div class="flex gap-3 py-2">
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

          <div class="py-4">
            <h2 class="font-semibold text-xl mb-3 uppercase">Color</h2>
            <div class="flex gap-3 py-2">
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
`
window.onload = updateSidebar

window.onresize = updateSidebar;

function updateSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.innerHTML = '';
        sidebarToggler.innerHTML = sidebarContent;
    } else {
        sidebarToggler.innerHTML = '';
        sidebar.innerHTML = sidebarContent;
    }
    initializeRangeInputs();
};

function initializeRangeInputs() {
    rangeInputs = document.querySelectorAll(".range-input");
    progress = document.querySelector(".progress");
    minMaxInputs = document.querySelectorAll(".min-max-inputs input");
    updateProgress();
    attachRangeListeners();
    attachInputListeners()
};

function updateProgress() {
    if (progress) {
        const minPercent = (rangeInputs[0].value / rangeInputs[0].max) * 100;
        const maxPercent = 100 - (rangeInputs[1].value / rangeInputs[1].max) * 100;
        progress.style.left = `${minPercent}%`;
        progress.style.right = `${maxPercent}%`;
    }
};

function attachRangeListeners() {
    rangeInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            const minValue = parseInt(rangeInputs[0].value);
            const maxValue = parseInt(rangeInputs[1].value);
            const priceGap = 0; // Adjust as needed

            if (maxValue - minValue < priceGap) {
                if (e.target.classList.contains("minVal")) {
                    rangeInputs[0].value = maxValue - priceGap;
                } else {
                    rangeInputs[1].value = minValue + priceGap;
                }
            }

            updateProgress();
            minMaxInputs[0].value = rangeInputs[0].value;
            minMaxInputs[1].value = rangeInputs[1].value;
        });
    });
};


function attachInputListeners(){
    minMaxInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minValue = parseInt(minMaxInputs[0].value)
            let maxValue = parseInt(minMaxInputs[1].value)
            const priceGap = 0; // Set your desired minimum gap between values
            // Ensure the minimum gap is maintained
            if ((maxValue - minValue >= priceGap)&&maxValue<=rangeInputs[1].max&&minValue>=rangeInputs[0].min) {
                
                if (e.target.classList.contains("min-input")) {
                    if (minValue <= maxValue) {
                        rangeInputs[0].value = minValue;
                        rangeInputs[1].value = maxValue;
                        updateProgress()
                    }
                } else {
                    if (maxValue >= minValue) {
                        rangeInputs[1].value = maxValue;
                        rangeInputs[0].value = minValue;
                        updateProgress()
                    }
                }
            }
        });
    });
}
