fetch("http://localhost:5000/recipes/1"{//.GET
    .then(response => response.json())
    .then(data => displayRecipes(data))
    .catch(error=> console.error("Error fetching recipes:",error))
})

const newRecipe ={ //POST
    name:"Lobster Ravioli",
    description: "Pasta stuffed with lobster in saffron sauce."
};

fetch("http://localhost:5000/recipes",{
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

//.DELETE
fetch("http://localhost:5000/recipes/1"{
    method: "DELETE"
})
.then(response=>{
    if(response.ok){
        console.log("Recipe deleted")
        fetchRecipes();
    }
})
.catch(erro=> console.error("Error deleting recipe:",error))

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



