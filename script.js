import {data} from "./data.js"
console.log(data)
listarItems()
let cart = []
function listarItems(){
    const ulItems = document.querySelector(".ul_items")
    data.forEach((item)=>{
        ulItems.insertAdjacentHTML("beforeend",`
            <li>
                <p>${item.descricao}</p>
                <button id="${item.id}">Add to cart</button>
            </li>
            `)
        const btnAdd = document.getElementById(item.id)
       
        btnAdd.addEventListener("click",()=>{
            console.log(item)
            carrinho.push(item)
            console.log(cart)
            build_cart()
        })
    })  
}
function build_cart(){
    const ulCart = document.querySelector(".ul_cart")
    ulCart.innerHTML = ""
    cart.forEach((item)=>{
        ulCart.insertAdjacentHTML("beforeend",`
            <li>${item.descricao}</li>
            `)
    })
}