"use strict";


// event listeners for all buttons - 
const buttons2 = document.querySelectorAll(".button");


const baseURLCreate = "http://localhost:8080";

const create = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the create function");
    console.log("what do you want to create")
    document.querySelector("#doingWhat").textContent = "Please enter the details of the plant you want to add to the database";
    showFormCreate();
}

const showFormCreate = () => {
    // clear anything currently there
const div =   document.querySelector(".formContainer");
while(div.firstChild){
    div.removeChild(div.firstChild);
}
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
  
// add submit and reset buttons
  const subBut = document.createElement("button");
  subBut.setAttribute("class", "formButton");
  subBut.setAttribute("id", "submit");
  subBut.innerText = "Submit";
  document.querySelector(".formContainer").appendChild(document.createElement("br"));
  document.querySelector(".formContainer").appendChild(subBut);

  const resBut = document.createElement("button");
  resBut.setAttribute("class", "formButton");
  resBut.setAttribute("id", "reset");
  resBut.innerText = "Reset";
  document.querySelector(".formContainer").appendChild(resBut);

  // add event listener for submit and reset button
  document.querySelector(".formContainer").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = this;
    const data = {
        name: form.plantName.value,
        foliageColour: form.foliageColour.value,
        plantingMonth: form.month.value,
        plantingPosition: form.position.value,
        flowerColour: form.flowerCol.value
    };
    console.log(data);
    axios
        .post(`${baseURLCreate}/createPlant/`, data)
        .then(
            console.log("in the create axios function, after post"))
        .catch(err => console.error(err))    
        read()
},)
 reset.addEventListener("click", () => {
    showFormCreate(); 

 })
}

buttons2.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "create") {
            create(); }
    });
});