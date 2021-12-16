"use strict";


const readByName = () => {
    clear();
    console.log("in the read by name function");
    document.querySelector("#doingWhat").textContent = "Please enter the name of the plants you would like to find";
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

    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        const plantNameByName = form.plantName.value; 
        clear();

document.querySelector("#doingWhat").textContent = "";
const outputDiv = document.querySelector("#outputDiv");;
        axios
        .get(`${baseURL}/getPlantByName/${plantNameByName}`)
                .then( res => {
                    const plants = res.data;
                    console.log(plants); 
  
                    const plantCard = document.createElement("div");
                    plantCard.setAttribute("class", "card");
        
                    const plantBody = document.createElement("div");
                    plantBody.setAttribute("class", "card-body");
                    plantBody.setAttribute("style", "width: 18rem; ");
                    
        
                    const plantTitle = document.createElement("h3");
                    plantTitle.setAttribute("class", "card-title");
                    plantTitle.innerText = `${plants.name}\r\n`;
                    plantBody.appendChild(plantTitle);
        
                    const info = document.createElement("p");
                    info.setAttribute("class", "card-text");
                    info.innerText = `\r\n
                    Foliage colour: ${plants.foliageColour}\r\n
                    Planting month: ${plants.plantingMonth}\r\n
                    Planting position: ${plants.plantingPosition}\r\n
                    Flower colour: ${plants.flowerColour}\r\n
                    ID: ${plants.id}\r\n `;
                     plantBody.appendChild(info);
        
                    const plantDel = document.createElement("button");
                    plantDel.setAttribute("id", "cardButton");
                    plantDel.innerText = "delete";

                    plantDel.addEventListener("click", () => {
                            axios
                                .delete(`${baseURL}/deletePlant/${plants.id}`)
                                .then(res => read())
                                .catch(err => console.error(err))
                                console.log(res);
                                document.querySelector(".outputcontainer").innerText = "";
                                read();
                }        
                );

                plantCard.appendChild(plantBody);
                plantCard.appendChild(plantDel);
                outputDiv.appendChild(plantCard); 
    
                document.querySelector(".formContainer").addEventListener("reset", function(event) {
                    readByName(); 
        })
    })
        .catch(err => console.error(err))       
    })
    }

