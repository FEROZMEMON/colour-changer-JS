

let div = document.querySelector('div')
const body = document.querySelector('body')

const array = ["orange", "green", "blue", "white"];

 for (let i = 0; i < array.length; i++) {
   div.innerHTML += `<button onclick='changecolor(${i})'>${array[i]} </button>`

    }
function changecolor(i) {
body.style.backgroundColor = `${array[i]}`
    
}   