// INPUT

const objectList = [];
const shoppingListElem = document.getElementById('shopping-list');
console.log(shoppingListElem);
const objectToAdd = parseInt(prompt("Quanti oggetti vuoi inserire?"));
console.log(objectToAdd, "numero oggetti richiesti");

// ESECUZIONE LOGICA

let i = 0;

while (i < objectToAdd) {
    const objectRequested = prompt("Inserisci l'oggetto desiderato");
    objectList.push(objectRequested);
    const listElem = document.createElement("li");
    listElem.innerHTML = objectList[i];
    listElem.addEventListener("click", function () {
        listElem.classList.toggle("taken");
    });
    // OUTPUT
    shoppingListElem.append(listElem);
    i++;
}