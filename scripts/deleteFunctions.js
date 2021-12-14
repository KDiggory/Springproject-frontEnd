"use strict";
var id;
const buttonsDel = document.querySelectorAll(".button");


const baseURLDelete = "http://localhost:8080";

const deleteById = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the deleteById function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to delete from the database";
    showIdDel();
}

const showIdDel = () => {
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
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
  
    const subBut = document.createElement("button");
    subBut.setAttribute("class", "formButton");
    subBut.setAttribute("id", "submit");
    subBut.innerText = "Yes, delete!";
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    document.querySelector(".formContainer").appendChild(subBut);
  
    const resBut = document.createElement("button");
    resBut.setAttribute("class", "formButton");
    resBut.setAttribute("id", "reset");
    resBut.innerText = "No, Reset!";
    document.querySelector(".formContainer").appendChild(resBut);

    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        id = form.idActual.value; // a problem reading value here? but it works
        console.log(id);
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        document.querySelector("#doingWhat").textContent = "Deleted, here is whats left - actually showing the delted one still?";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector("#outputDiv").appendChild(output);
        axios
        .delete(`${baseURLCreate}/deletePlant/${id}`)
        .then(
            console.log("in the delete axios function"))
        .catch(err => console.error(err))    
        readDelete(); // this is showing the list with the deleted on still in
  },)
  // add event listener for reset button
  reset.addEventListener("click", () => {
    showIdDel(); 
    
  })
  }

    const readDelete = () => {
        const div =   document.querySelector(".formContainer");
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        const outputDiv =   document.querySelector(".outputcontainer");
        while(outputDiv.firstChild){
            outputDiv.removeChild(outputDiv.firstChild);
    
        axios
        .get(`${baseURLCreate}/getAll`)
        .then(res => {
            const plants = res.data;
            for(let i = 0; i<plants.length; i++){
                console.log(plants[i]); // should log projects to console
                const plantCol = document.createElement("div");
                plantCol.setAttribute("class", "col");
    
                const plantCard = document.createElement("div");
                plantCard.setAttribute("class", "card");
    
                const plantBody = document.createElement("div");
                plantBody.setAttribute("class", "card-body");
    
                const plantTitle = document.createElement("h2");
                plantTitle.setAttribute("class", "card-title");
                plantTitle.innerText = `${plants[i].name}`;
                outputDiv.appendChild(plantTitle);
    
                const plantFoliage = document.createElement("p");
                plantFoliage.setAttribute("class", "card-text");
                plantFoliage.innerText = `Foliage colour: ${plants[i].foliageColour}`;
                outputDiv.appendChild(plantFoliage);
    
                const plantMonth = document.createElement("p");
                plantMonth.setAttribute("class", "card-text");
                plantMonth.innerText = `Planting month: ${plants[i].plantingMonth}`;
                outputDiv.appendChild(plantMonth);
    
                const plantPosition = document.createElement("p");
                plantPosition.setAttribute("class", "card-text");
                plantPosition.innerText = `Planting position: ${plants[i].plantingPosition}`;
                outputDiv.appendChild(plantPosition);
    
                const plantFlower = document.createElement("p");
                plantFlower.setAttribute("class", "card-text");
                plantFlower.innerText = `Flower colour: ${plants[i].flowerColour}`;
                outputDiv.appendChild(plantFlower);

                const plantId = document.createElement("p");
                plantId.setAttribute("class", "card-text");
                plantId.innerText = `ID: ${plants[i].id}`;
                outputDiv.appendChild(plantId);
    
                const plantDel = document.createElement("button");
                plantDel.setAttribute("id", "cardButton");
                plantDel.innerText = "delete";
                // plantDel.classList.add("btn", "btn-danger");
                plantDel.addEventListener("click", () => {
                        axios
                            .delete(`${baseURLCreate}/deletePlant/${plants[i].id}`)
                            .then(
                                readCreate())
                            .catch(err => console.error(err))
                            console.log(res);
                            document.querySelector(".outputcontainer").innerText = "";
                            readCreate();
            });
            plantBody.appendChild(plantDel);
            plantCard.appendChild(plantBody);
            plantCol.appendChild(plantDel);
            outputDiv.appendChild(plantCol);
        }
    
        })
    
    }}

    buttonsDel.forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.innerText === "delete") {
                deleteById();
            } else if (event.target.innerText === "reset this page") {
                clear();
            } else if (event.target.innerText === "delete all entries") {
                deleteAll();
            }     
        });
    });
