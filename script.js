import {data} from "./data.js"
list_items()
let cart = []
function list_items()
{
    const ul_Items = document.querySelector(".ul_items")
    data.forEach((item)=>{
        ul_Items.insertAdjacentHTML("beforeend",`
            <li>
                <p>${item.descricao}</p>
                <button id="${item.id}">Add to cart</button>
            </li>
            `)
        const btnAdd = document.getElementById(item.id)
       
        btnAdd.addEventListener("click",()=>{
            console.log(item)
            cart.push(item)
            console.log(cart)
            build_cart()
            total_price()
        })
    })  
}
function build_cart()
{
    const ulCart = document.querySelector(".ul_cart")
    const empty = document.querySelector('#empty_cart')
    empty.innerText = cart.length + ' items in cart'
    ulCart.innerHTML = ""
    cart.forEach((item)=>{
        ulCart.insertAdjacentHTML("beforeend",`
            <li>${item.descricao}</li>
            `)
    })
}

function total_price()
{
    const p_total = document.querySelector('#total')
    const total = cart.reduce((prev,next)=>{
        return prev += Number(next.preco)
    },0)
    p_total.innerText = total
    console.log(total)
}