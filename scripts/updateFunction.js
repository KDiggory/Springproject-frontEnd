"use strict";

const buttonsUpdate = document.querySelectorAll(".button");

const update = () => {

    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
console.log("in the update function");
document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to update and the new details";
showFormUpdate();
}


const showFormUpdate = () => {
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
nameInput.setAttribute("id", "nameActual");
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
foliageInput.setAttribute("id", "foliageColActual");
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
monthInput.setAttribute("id", "monthActual");
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
positionInput.setAttribute("id", "positionActual");
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
flowerInput.setAttribute("id", "flowerActual");
flowerInput.setAttribute("name", "flowerCol");
document.querySelector(".formContainer").appendChild(flowerInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

const idInputLabel = document.createElement("label");
idInputLabel.setAttribute("for", "id");
idInputLabel.setAttribute("class", "label");
idInputLabel.innerText = "ID:";
document.querySelector(".formContainer").appendChild(idInputLabel);
document.querySelector(".formContainer").appendChild(document.createElement("br"));
const idInput = document.createElement("input");
idInput.setAttribute("type", "number");
idInput.setAttribute("class", "input");
idInput.setAttribute("id", "idActual");
idInput.setAttribute("name", "id");
document.querySelector(".formContainer").appendChild(idInput);
document.querySelector(".formContainer").appendChild(document.createElement("br"));

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
// add event listener for submit button

document.querySelector(".formContainer").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = this;
    const id = form.idActual.value;
    const data = {
        name: form.nameActual.value,
        foliageColour: form.foliageColActual.value,
        plantingMonth: form.monthActual.value,
        plantingPosition: form.positionActual.value,
        flowerColour: form.flowerActual.value,
        id: form.idActual.value
    }
  console.log(data);
  axios
      .put(`${baseURLCreate}/updatePlant/${id}`, data)
      .then(
          console.log("in the update axios function, after put"))
      .catch(err => console.error(err))    
      readUpdate()
},)
// add event listener for reset button
reset.addEventListener("click", () => {
    showFormUpdate(); 
  
})
}

const readUpdate = () => {
    const form = this;
    const id = form.idActual.value;
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the read function - after update");
    document.querySelector("#doingWhat").textContent = "Reading all entries";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector(".outputcontainer").appendChild(output);

    axios
    .get(`${baseURLCreate}/getPlantById/${id}`)
    .then(res => {
        const plants = res.data;
        
            console.log(plants); // should log updated plant to console
            const plantCol = document.createElement("div");
            plantCol.setAttribute("class", "col");

            const plantCard = document.createElement("div");
            plantCard.setAttribute("class", "card");

            const plantBody = document.createElement("div");
            plantBody.setAttribute("class", "card-body");

            const plantTitle = document.createElement("h2");
            plantTitle.setAttribute("class", "card-title");
            plantTitle.innerText = `${plants.name}`;
            output.appendChild(plantTitle);

            const plantFoliage = document.createElement("p");
            plantFoliage.setAttribute("class", "card-text");
            plantFoliage.innerText = `Foliage colour: ${plants.foliageColour}`;
            output.appendChild(plantFoliage);

            const plantMonth = document.createElement("p");
            plantMonth.setAttribute("class", "card-text");
            plantMonth.innerText = `Planting month: ${plants.plantingMonth}`;
            output.appendChild(plantMonth);

            const plantPosition = document.createElement("p");
            plantPosition.setAttribute("class", "card-text");
            plantPosition.innerText = `Planting position: ${plants.plantingPosition}`;
            output.appendChild(plantPosition);

            const plantFlower = document.createElement("p");
            plantFlower.setAttribute("class", "card-text");
            plantFlower.innerText = `Flower colour: ${plants.flowerColour}`;
            output.appendChild(plantFlower);

            const plantDel = document.createElement("button");
            plantDel.innerText = "delete";
            plantDel.classList.add("btn", "btn-danger");
            plantDel.addEventListener("click", () => {
                    axios
                        .delete(`${baseURLCreate}/deletePlant/${plants.id}`)
                        .then(
                            readCreate())
                        .catch(err => console.error(err))
                        console.log(res);
                        document.querySelector(".outputcontainer").innerText = "";
                        readUpdate();
        });
        plantBody.appendChild(plantDel);
        plantCard.appendChild(plantBody);
        plantCol.appendChild(plantDel);
        output.appendChild(plantCol);
    })

    }



buttonsUpdate.forEach(btn => {
btn.addEventListener('click', event => {
       if (event.target.innerText === "update") {
        update();
    }     
});
});