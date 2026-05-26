// https://jsonplaceholder.typicode.com/photos

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => displayCard(json.filter((item, index) => index < 10)))

function displayCard(todos)
{
   for(let i = 0; i < todos.length; i++)
   {
    let card = document.createElement('div')
    card.classList.add('card')

    let id = document.createElement('p')
    let title = document.createElement('p')
    let completed = document.createElement('p')

    id.textContent = `ID: ${todos[i].id}`
    title.textContent = `Title: ${todos[i].title}`
    completed.textContent = `Completed: ${todos[i].completed}`

    card.appendChild(id)
    card.appendChild(title)
    card.appendChild(completed)
    document.body.appendChild(card)
   }
}



// let fruits = ['apple', 'orange', 'banana', 'grape', 'mango']

// let result = fruits.filter((item, index) => index < 3)

// console.log(result)