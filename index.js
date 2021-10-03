// Write your code here!

const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

 element.append(ul);
 




  console.log(document.querySelector("main"))
   document.querySelector("main").remove()
  console.log(document.querySelector("main"))
  const main = document.getElementById("main");
 
    const element2 = document.createElement("h1");
document.body.append(element2);


function newHeader (name)    {
  const newHeader1 = document.querySelector('h1')

newHeader1.id="victory"
  document.body.append(newHeader1)
  newHeader1.textContent  = `${name} the champion `
console.log(newHeader1)
}
newHeader("ben")
