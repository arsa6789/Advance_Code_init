const body = document.body;
const div = document.querySelector("div");
const p = document.createElement("p");
p.innerHTML = "Bazooka";

console.log(div.dataset.longJaw)
body.style.fontFamily = "Arial"
body.append(p);
div.innerHTML = "Lorem ipsum the quesry selector";

// console.log(div.getAttribute('title'))
// or we can

console.log(div.title);

// console.log(div.setAttribute('style', 'color:red'))
// or we can 
div.classList.add('fefewfwf')
div.classList.add('dwdhihiwhd')
div.classList.remove('fefewfwf')
div.classList.toggle('hewewe' ,true)

console.log(div.style = "color:red")
div.removeAttribute('style')
body.append(div);
