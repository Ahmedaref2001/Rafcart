const sidebarToggle=document.querySelector(".sidebar-toggle")
const sidebar=document.querySelector(".sidebar")
 
sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.toggle("opacity-100")
    sidebar.classList.toggle("top-10")
    sidebar.classList.toggle("top-24")
    sidebar.classList.toggle("invisible")
})
