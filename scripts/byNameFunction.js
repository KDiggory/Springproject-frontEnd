"use strict";

const buttonsName = document.querySelectorAll(".button");

const readByName = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the read by name function");
    document.querySelector("#doingWhat").textContent = "Please enter the name of the plants you would like to find";
    showName();
}

const showName = () => {
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
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

    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        const name = form.nameActual.value;
        console.log(name);
        axios
        .get(`${baseURL}/getPlantByName/${name}`)
                .then( res => {
                console.log(res.data);
                const plants = res.data;
                const plantCol = document.createElement("div");
                plantCol.setAttribute("class", "col");
    
                const plantCard = document.createElement("div");
                plantCard.setAttribute("class", "card");
    
                const plantBody = document.createElement("div");
                plantBody.setAttribute("class", "card-body");
    
                const plantTitle = document.createElement("h2");
                plantTitle.setAttribute("class", "card-title");
                plantTitle.innerText = `${plants.name}`;
                outputDiv.appendChild(plantTitle);
            
    
                const plantFoliage = document.createElement("p");
                plantFoliage.setAttribute("class", "card-text");
                plantFoliage.innerText = `Foliage colour: ${plants.foliageColour}`;
                outputDiv.appendChild(plantFoliage);
    
                const plantMonth = document.createElement("p");
                plantMonth.setAttribute("class", "card-text");
                plantMonth.innerText = `Planting month: ${plants.plantingMonth}`;
                outputDiv.appendChild(plantMonth);
    
                const plantPosition = document.createElement("p");
                plantPosition.setAttribute("class", "card-text");
                plantPosition.innerText = `Planting position: ${plants.plantingPosition}`;
                outputDiv.appendChild(plantPosition);
    
                const plantFlower = document.createElement("p");
                plantFlower.setAttribute("class", "card-text");
                plantFlower.innerText = `Flower colour: ${plants.flowerColour}`;
                outputDiv.appendChild(plantFlower);

                const plantId = document.createElement("p");
                plantId.setAttribute("class", "card-text");
                plantId.innerText = `ID: ${plants.id}`;
                output.appendChild(plantId);
    
                const plantDel = document.createElement("button");
                plantDel.innerText = "delete";
                plantDel.classList.add("btn", "btn-danger");
                plantDel.addEventListener("click", () => {
                        axios
                            .delete(`${baseURL}/deletePlant/${plants.id}`)
                            .then(res => read())                   
                            .catch(err => console.error(err))
                            console.log(res);
            });
            console.log("Do i get to here?")
            plantBody.appendChild(plantDel);
            plantCard.appendChild(plantBody);
            plantCol.appendChild(plantDel);
            outputDiv.appendChild(plantCol);
        },
    
         resBut.addEventListener("click", () => {
            showIdRead(); 
         }))
    })
        .catch(err => console.error(err))     // get  byNameFunction.js:118 Uncaught TypeError: Cannot read properties of undefined (reading 'catch')  
    }

buttonsName.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "read by name") {
            readByName();
        }
    });
});

