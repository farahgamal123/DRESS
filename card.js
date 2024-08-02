let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cartclose");
let shopcontainer = document.querySelector(".shopcontainer");
/*let counter = document.querySelector(".counter");*/

cartIcon.addEventListener("click", function () {
    cart.classList.add("done");
});
closeCart.addEventListener("click", function () {
    cart.classList.remove("done");
});

/*let shop =[];
if (localStorage!=null){shop=JSON.parse(localStorage.shopcontainer)}
else{
    shop = [];
}

function input(shopcontainer){
    let shopcontainer = shopcontainer.find((data)=>data.shopcontainer===shopcontainer)
    let index = shop.findIndex((data)=>data.shopcontainer===shopcontainer)
    if (index>-1){shop[index].counter+=1}
    else{
        shop.push({...shopcontainer,counter:1})
    }
}
input();*/
