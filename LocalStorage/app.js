const btn = document.getElementsByTagName('button')[0]
const body = document.body

btn.addEventListener("click", function(){

    currentColor = localStorage.getItem('bgcolor')

    if(currentColor == 'red')
    {
        body.style.backgroundColor = 'white'
        localStorage.setItem('bgcolor', 'white')
    }else{
        body.style.backgroundColor = 'red'
        localStorage.setItem('bgcolor', 'red')
    }
});

(function(){
    body.style.backgroundColor = localStorage.getItem('bgcolor')
})()