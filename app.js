console.log("Final Project");

const div = document.querySelector("#container");

let cardItems = []

let data;

var zero = document.querySelector(".zero")

fetch(`https://dummyjson.com/products`)

.then(res => res.json())

.then(res => {
    console.log(res.products);

    data = res
    
    res.products.map((item, index) => {
        div.innerHTML += `

        <div class="alone-card">

        <img src="${item.thumbnail}" width="60%">
        <h1>Title : ${item.title}</h1>
        <h3 class="bg-green">Price : $${item.price}</h3>
        <p>${item.description.slice(0, 30)} <b> <span class="bg-red">............</span> </b> </p>

        <button class="seeMore" onclick="showMore(${item.id})">See More...</button>
        <button class="seeMore" onclick="addToCard(${index})">Add To Card</button>
 
        </div>
        `
    })
})

.catch(err => {
    console.log(err);
    
})

const showMore = id => {
    console.log(id);
    localStorage.setItem("id", id)         
    window.location = "OneProduct.html"
}


const addToCard = (index) => {

    zero.innerHTML++

    var setcard = cardItems.indexOf(data.products[index])

    if (setcard === -1) {
        
        data.products[index].quantity = 1;
        cardItems.push(data.products[index]);

    } else {
        cardItems.quantity += 1;
    }

    console.log(cardItems);
   
    Swal.fire({
        title: "Good job!",
        text: "Item added to cards successfully!",
        icon: "success",
    });

}


function checkOut() {
    var cards = JSON.stringify(cardItems)
    localStorage.setItem("products" , cards)
    window.location = "addToCard.html";
}

