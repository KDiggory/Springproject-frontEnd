"use strict";

const buttonsName = document.querySelectorAll(".button");

const readByName = () => {
    clear();
//     const outputDiv =   document.querySelector(".outputcontainer");
//     while(outputDiv.firstChild){
//         outputDiv.removeChild(outputDiv.firstChild);
// }
    console.log("in the read by name function");
    document.querySelector("#doingWhat").textContent = "Please enter the name of the plants you would like to find";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector("#outputDiv").appendChild(output);
    showName();
}

const showName = () => {
    clear();
//     const div =   document.querySelector(".formContainer");
//     while(div.firstChild){
//         div.removeChild(div.firstChild);
//     }
//     const outputDiv =   document.querySelector(".outputcontainer");
//     while(outputDiv.firstChild){
//         outputDiv.removeChild(outputDiv.firstChild);
// }


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
        const plantNameByName = form.plantName.value; 
        clear();
//         const outputDiv =   document.querySelector(".outputcontainer");
//     while(outputDiv.firstChild){
//         outputDiv.removeChild(outputDiv.firstChild);
// }
// while(div.firstChild){
//     div.removeChild(div.firstChild);
// }
document.querySelector("#doingWhat").textContent = "";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector("#outputDiv").appendChild(output);
        axios
        .get(`${baseURL}/getPlantByName/${plantNameByName}`)
                .then( res => {
                console.log(res.data);
                const plants = res.data;
                const plantCol = document.createElement("div");
                plantCol.setAttribute("class", "row row-cols-2 row-cols-md-4 g-4");
    
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

                const plantId = document.createElement("p");
                plantId.setAttribute("class", "card-text");
                plantId.innerText = `ID: ${plants.id}`;
                output.appendChild(plantId);
    
                const plantDel = document.createElement("button");
                plantDel.setAttribute("id", "cardButton");
                plantDel.innerText = "delete";
                plantDel.addEventListener("click", () => {
                        axios
                            .delete(`${baseURL}/deletePlant/${plants.id}`)
                            .then(res => read())                   
                            .catch(err => console.error(err))
                            console.log(res);
            });
            plantBody.appendChild(plantDel);
            plantCard.appendChild(plantBody);
            plantCol.appendChild(plantDel);
            output.appendChild(plantCol);
    
         resBut.addEventListener("click", () => {
            showIdRead(); 
        })
    })
        .catch(err => console.error(err))       
    })
    
    }

buttonsName.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "read by name") {
        readByName();
        } 
    });
});

