const formEle = document.getElementById('form')
// const formEle = document.forms[0]
const body = document.body
let priceArray = []

formEle.addEventListener("submit", function(event){
    event.preventDefault()

    let itemName = document.getElementById('item').value
    let itemPrice = document.getElementById('price').value

    priceArray.push(Number(itemPrice))

    displayShoppingList(itemName, itemPrice)

    formEle.reset();
})

ol = document.createElement('ol');
body.appendChild(ol)

const p = document.createElement('p')
body.appendChild(p)

function displayShoppingList(item, price)
{
    let li = document.createElement('li')

    li.textContent = `${item} - ${price}`

    ol.appendChild(li)

    let total  = priceArray.reduce((a, b) => a + b)

    p.textContent = `Total - ${total}`

}


const printEle = document.getElementById('print')

printEle.addEventListener("click", function(){
    print();
})


