let target=document.querySelectorAll(".panel");
target.forEach((m)=>{
m.addEventListener('click',()=>{
    removeActiveClass();
    m.classList.add("active");
})
})
function removeActiveClass(){
    target.forEach(m=>{
        m.classList.remove("active");
    })
}