let formEle = document.getElementById('form')


formEle.addEventListener("submit", function(event){
    event.preventDefault(); // prevents the default behaviour of forms

    let username = document.getElementById("username").value;

    let age = document.getElementById("age").value

    let validUsername = Number(username)

    if(!isNaN(validUsername))
    {
        alert("Invalid input")
    }

    displayUserData(username, age);

    formEle.reset(); // clears the input field
})


function displayUserData(username, age)
{
    let personName = document.getElementById('person_name')
    let personAge = document.getElementById('person_age')

    personName.textContent = username
    personAge.textContent = age

}