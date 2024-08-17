import {data} from "./data.js"
list_items()
let cart = []

function list_items()
{
    const ul_items = document.querySelector(".ul_items")
    data.forEach((item)=>{
        ul_items.insertAdjacentHTML("beforeend",`
            <li>
                <div>
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                    <p>R$ ${item.price}</p>
                </div>
                <button id="${item.id}">Add to cart</button>
            </li>`)

        const btn_add = document.getElementById(item.id)
        btn_add.addEventListener("click",()=>{
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
    const ul_cart = document.querySelector(".ul_cart")
    const empty = document.querySelector('#empty_cart')
    empty.innerText = cart.length + ' items in cart'
    ul_cart.innerHTML = ""
    cart.forEach((item,index)=>{
        ul_cart.insertAdjacentHTML("beforeend",`
            <li>
                <p>${item.name}</p>
                <button id="${item.id}${index}remove">X</button>
            </li> `)
            
        const btn_Remove = document.getElementById(`${item.id}${index}remove`)
            btn_Remove.addEventListener("click",(e)=>{   
            console.log(e)
            remove_cart(item.id)
            total_price()
           
            
        })
    })
    const btn_buy = document.getElementById('buy')
    btn_buy.removeEventListener("click",buy_cart,true)

    btn_buy.addEventListener("click",()=>{
        buy_cart()
    })
}

function total_price()
{
    const p_total = document.querySelector('#total')
    const total = cart.reduce((prev,next)=>{
        return prev += Number(next.price)
    },0)
    p_total.innerText = total
    console.log(total)
}

function remove_cart(id)
{  
    const filter = cart.findIndex((cart)=>cart.id == id)
    cart.splice(filter,1)
    console.log(filter,"index")
    console.log(id,"id")
    build_cart()
}

function buy_cart()
{
  
    const total = cart.reduce((prev,next)=>{
        return prev += Number(next.price)
    },0)
   
        console.log("purchase complete. " + cart.length + " items bought. " + total + " total") 
        
        

    
}