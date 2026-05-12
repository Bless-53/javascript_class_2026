let fruitsDiv = document.getElementById("list_of_fruits");

let ol = document.createElement("ol");

fruitsDiv.appendChild(ol);

let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Mango",
  "Pear",
  "Pawpaw",
];

// fruits.forEach(fruit => console.log(fruit))

for (let fruit = 0; fruit < fruits.length; fruit++) {
  // console.log(fruits[fruit]);

  let li = document.createElement("li");

  li.textContent = fruits[fruit];

  ol.appendChild(li);
}

let collections = {
  Fruits: ["apple", "mango", "pawpaw", "pepper"],
  Cars: ["toyota", "benz", "bmw", "audi"],
  Phones: ["Iphone", "Nokia", "Windows Phone", "Google pixel"],
  Persons: ["Peter", "Mary", "Akan"],
  Person: ["Peter", "Mary", "Akan"],
};

let body = document.body;

let ul = document.createElement("ul");

body.appendChild(ul);

for (let key in collections) {
  let list = document.createElement("li");
  list.textContent = key;

  let orderedList = document.createElement("ol");

  list.appendChild(orderedList);

  console.log(collections[key]);

//   for (let i = 0; i < collections[key].length; i++) {
//     let listItem = document.createElement("li");

//     listItem.textContent = collections[key][i];

//     orderedList.appendChild(listItem);
//   }

  for (let i of collections[key]) {
    let listItem = document.createElement("li");

    listItem.textContent = i;

    orderedList.appendChild(listItem);
  }

  ul.appendChild(list);
}

let arr = ["ks", "sksk"];
