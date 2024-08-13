import {data} from "./data.js"
console.log(data)
listarItems()
let carrinho = []
function listarItems(){
    const ulItems = document.querySelector(".ul_items")
    data.forEach((item)=>{
        ulItems.insertAdjacentHTML("beforeend",`
            <li>
                <p>${item.descrição}</p>
                <button id="${item.id}">Adiconar ao carrinho</button>
            </li>
            `)
        const btnAdd = document.getElementById(item.id)
       
        btnAdd.addEventListener("click",()=>{
            console.log(item)
            carrinho.push(item)
            console.log(carrinho)
            montarCarrinho()
        })
    })  
}
function montarCarrinho(){
    const ulCarrinho = document.querySelector(".ul_carrinho")
    ulCarrinho.innerHTML = ""
    carrinho.forEach((item)=>{
        ulCarrinho.insertAdjacentHTML("beforeend",`
            <li>${item.descricao}</li>
            `)
    })
}