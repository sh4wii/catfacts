const divCon = document.getElementById('container')
const btn = document.getElementById('new-fact-btn')
const factShow = document.getElementById('fact')

function main(){
  fetch('https://catfact.ninja/fact')
  .then(Response => Response.json())
  .then(data => factShow.innerHTML = data.fact)
  .catch(lie => alert("try again later"))
}

btn.addEventListener("click",  main)

