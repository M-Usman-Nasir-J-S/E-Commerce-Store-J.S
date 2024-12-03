console.log("how are you man ?");

const div = document.querySelector("#countainer")

const deta = localStorage.getItem("products");

const convert = JSON.parse(deta);

console.log(convert);

convert.map((item, index) => {

    div.innerHTML += `
    
    <div class="alone-card">

        <img src="${item.thumbnail}" width="60%">
        <h1>Title : ${item.title}</h1>
        <h2 class="bg-red">${item.warrantyInformation}</h2>
        <h3 class="bg-green" id="price${index}">Price : $${item.price}</h3>
        <p>${item.description.slice(0, 30)}<b>......</b></p>

        <h1 class="d-flex gap-3" > Quantity : 
    
        <button class="btn_s" onclick = "increase(${index})"> + </button>
        <span id="digit-${index}"> 1 </span> 
        <button class="btn_s" onclick = "decrease(${index})"> - </button>

        </h1>
    
        <button class="btn_s" onclick="deleteCard(${index})">Delete</button>

        <button class="btn_s" onclick="buyNow(${index})">Buy Now</button>

    </div>
    `

})


function increase(index) {

    let addNumber = document.querySelector(`#digit-${index}`)
    let price = document.querySelector(`#price${index}`);

    // Increase quantity
    addNumber.innerHTML++

    price.innerHTML = `Price :  $ ${convert[index].price * addNumber.innerHTML};`
}

function decrease(index) {
    
    let subNumber = document.querySelector(`#digit-${index}`)
    let price = document.querySelector(`#price${index}`);

    // Decrease quantity only if it's greater than 1
    if (subNumber.innerHTML > 1) {
        subNumber.innerHTML-- 
        price.innerHTML = `Price :  $ ${convert[index].price * subNumber.innerHTML};`

    }
}

function deleteCard(index) {
    convert.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(convert));
    
    div.innerHTML = ""

    convert.map((item, index) => {

        div.innerHTML += `
        
        <div class="alone-card">
    
            <img src="${item.thumbnail}" width="60%">
            <h1>Title : ${item.title}</h1>
            <h2 class="bg-red">${item.warrantyInformation}</h2>
            <h3 class="bg-green" id="price${index}">Price : $${item.price}</h3>
            <p>${item.description.slice(0, 30)}<b>......</b></p>
    
            <h1 class="d-flex gap-3" > Quantity : 
        
            <button class="btn_s" onclick = "increase(${index})"> + </button>
            <span id="digit-${index}"> 1 </span> 
            <button class="btn_s" onclick = "decrease(${index})"> - </button>
    
            </h1>
        
            <button class="btn_s" onclick="deleteCard(${index})">Delete</button>
    
            <button class="btn_s" onclick="buyNow(${index})">Buy Now</button>
    
        </div>
        `
    
    })
 
    Swal.fire({
        title: "No problem OR Dont worry",
        text: "Your item has deleted !",
        icon: "success",
      });
       
}



function buyNow(index) {
    console.log(index);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be perhase this Product ! I Order Now.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, buy it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Thanks For Shopping!",
            text: "Successfully you bought new ceil packed Product.",
            icon: "success"
          });
        }
      });
    
}

