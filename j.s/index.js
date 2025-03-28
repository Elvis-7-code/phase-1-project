fetch("https://end-of-phase.vercel.app/recipes")//.GET
    .then(response => response.json())
    .then(data => displayRecipes(data))
    .catch(error=> console.error("Error fetching recipes:",error))

const newRecipe ={ //POST
    name:"Lobster Ravioli",
    description: "Pasta stuffed with lobster in saffron sauce."
};

fetch("https://end-of-phase.vercel.app/recipes",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newRecipe)
})
.then(response+> response.json())
.then(data=>{
    console.log("Recipe added:", data)
    fetchRecipes();
})
.catch(error => console.error("Error adding recipe", error));


fetch("https://end-of-phase.vercel.app/recipes", {//.DELETE
    method: "DELETE"
})
.then(response=>{
    if(response.ok){
        console.log("Recipe deleted")
        fetchRecipes();
    }
})
.catch(error=> console.error("Error deleting recipe:",error))

//..CLICK
document.getElementById("home")
.addEventListener("click", function(){
    alert("Welcome to The Cosy Inn! Enjoy your stay!")
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



