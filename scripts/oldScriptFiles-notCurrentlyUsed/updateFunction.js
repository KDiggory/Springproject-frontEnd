"use strict";

let lastupdated;

const update = () => {
    clear();
console.log("in the update function");
document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to update and the new details";
const nameInputLabel = document.createElement("label");
nameInputLabel.setAttribute("for", "plantName");
nameInputLabel.setAttribute("class", "label");
nameInputLabel.innerText = "Plant name:";
document.querySelector(".formContainer").appendChild(nameInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("class", "input");
nameInput.setAttribute("name", "plantName");
document.querySelector(".formContainer").appendChild(nameInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const foliageInputLabel = document.createElement("label");
foliageInputLabel.setAttribute("for", "foliageColour");
foliageInputLabel.setAttribute("class", "label");
foliageInputLabel.innerText = "Foliage Colour:";
document.querySelector(".formContainer").appendChild(foliageInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const foliageInput = document.createElement("input");
foliageInput.setAttribute("type", "text");
foliageInput.setAttribute("class", "input");
foliageInput.setAttribute("name", "foliageColour");
document.querySelector(".formContainer").appendChild(foliageInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const monthInputLabel = document.createElement("label");
monthInputLabel.setAttribute("for", "month");
monthInputLabel.setAttribute("class", "label");
monthInputLabel.innerText = "Planting month:";
document.querySelector(".formContainer").appendChild(monthInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const monthInput = document.createElement("input");
monthInput.setAttribute("type", "text");
monthInput.setAttribute("class", "input");
monthInput.setAttribute("name", "month");
document.querySelector(".formContainer").appendChild(monthInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const positionInputLabel = document.createElement("label");
positionInputLabel.setAttribute("for", "position");
positionInputLabel.setAttribute("class", "label");
positionInputLabel.innerText = "Planting position:";
document.querySelector(".formContainer").appendChild(positionInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const positionInput = document.createElement("input");
positionInput.setAttribute("type", "text");
positionInput.setAttribute("class", "input");
positionInput.setAttribute("name", "position");
document.querySelector(".formContainer").appendChild(positionInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const flowerInputLabel = document.createElement("label");
flowerInputLabel.setAttribute("for", "flowerCol");
flowerInputLabel.setAttribute("class", "label");
flowerInputLabel.innerText = "Flower colour:";
document.querySelector(".formContainer").appendChild(flowerInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const flowerInput = document.createElement("input");
flowerInput.setAttribute("type", "text");
flowerInput.setAttribute("class", "input");
flowerInput.setAttribute("name", "flowerCol");
document.querySelector(".formContainer").appendChild(flowerInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const idInputLabel = document.createElement("label");
idInputLabel.setAttribute("for", "plantId");
idInputLabel.setAttribute("class", "label");
idInputLabel.innerText = "ID:";
document.querySelector(".formContainer").appendChild(idInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const idInput = document.createElement("input");
idInput.setAttribute("type", "number");
idInput.setAttribute("class", "input");
idInput.setAttribute("name", "plantId");
document.querySelector(".formContainer").appendChild(idInput);

const subBut = document.createElement("button");
subBut.setAttribute("class", "formButton");
subBut.setAttribute("type", "submit");
subBut.innerText = "Submit";
document.querySelector(".formContainer").appendChild(document.createElement("br"));
document.querySelector(".formContainer").appendChild(subBut);

const resBut = document.createElement("button");
resBut.setAttribute("class", "formButton");
resBut.setAttribute("type", "reset");
resBut.innerText = "Reset";
document.querySelector(".formContainer").appendChild(resBut);
// add event listener for submit button

document.querySelector(".formContainer").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = this;
    lastupdated  = form.plantId.value;
    const data = {
        name: form.plantName.value, 
        foliageColour: form.foliageColour.value,
        plantingMonth: form.month.value,
        plantingPosition: form.position.value,
        flowerColour: form.flowerCol.value,
        id: form.plantId.value
    };
 
  axios
      .put(`${baseURL}/updatePlant/${lastupdated}`, data)
      .then(
          console.log("in the update axios function, after put")) 
      .catch(err => console.error(err))
      clear();
      document.querySelector("#doingWhat").textContent = "Updated!";
},)
// add event listener for reset button
document.querySelector(".formContainer").addEventListener("reset", function(event) {
    update(); 
  
})
}
