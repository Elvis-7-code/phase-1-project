document.getElementById("home")
.addEventListener("click", function(){
    alert("Welcome to our services!")
})

document.getElementById("menu")
.addEventListener("click", function(){
    document.getElementById("appetizer").scrollIntoView({behavior: "smooth"});
});

document.querySelectorAll(".add-to-cart").forEach(button=>{
    button.addEventListener("click", function (){
        alert("Item added to cart!")
    })
})
function (params) {
    
}
