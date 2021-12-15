"use strict";

const buttons = document.querySelectorAll(".button");
const baseURL = "http://localhost:8080";

const readById = () => {
    clear();
//     const outputDiv =   document.querySelector(".outputcontainer");
//     while(outputDiv.firstChild){
//         outputDiv.removeChild(outputDiv.firstChild);
// }
    console.log("in the readById function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to find";
    showIdRead();
}

const showIdRead = () => {
    clear();
    const idInputLabel = document.createElement("label");
    idInputLabel.setAttribute("for", "id");
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
    subBut.setAttribute("id", "submit");
    subBut.innerText = "Submit";
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    document.querySelector(".formContainer").appendChild(subBut);
  
    const resBut = document.createElement("button");
    resBut.setAttribute("class", "formButton");
    resBut.setAttribute("id", "reset");
    resBut.innerText = "Reset";
    document.querySelector(".formContainer").appendChild(resBut); 
    
    // need event listeners for each button

    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        const plantIdbyId = form.plantId.value;
        clear();
        const outputDiv = document.querySelector("#outputDiv");
        document.querySelector("#doingWhat").textContent =""
   
        axios
            .get(`${baseURL}/getPlantById/${plantIdbyId}`)
            .then( res => {
            const plant = res.data;
            console.log(plant); 
  
            const plantCard = document.createElement("div");
            plantCard.setAttribute("class", "card");

            const plantBody = document.createElement("div");
            plantBody.setAttribute("class", "card-body");
            plantBody.setAttribute("style", "width: 18rem; ");
            

            const plantTitle = document.createElement("h3");
            plantTitle.setAttribute("class", "card-title");
            plantTitle.innerText = `${plant.name}\r\n`;
            plantBody.appendChild(plantTitle);

            const info = document.createElement("p");
            info.setAttribute("class", "card-text");
            info.innerText = `\r\nFoliage colour: ${plant.foliageColour}\r\n
            Planting month: ${plant.plantingMonth}\r\n
            Planting position: ${plant.plantingPosition}\r\n
            Flower colour: ${plant.flowerColour}\r\n
            ID: ${plant.id}\r\n `;
             plantBody.appendChild(info);

            const plantDel = document.createElement("button");
            plantDel.setAttribute("id", "cardButton");
            plantDel.innerText = "delete";

            plantDel.addEventListener("click", () => {
                axios
                    .delete(`${baseURL}/deletePlant/${plant.id}`)
                    .then(res => read())
                    .catch(err => console.error(err))
                    console.log(res);
                    document.querySelector(".outputcontainer").innerText = "";
                    read();
    }        
    );
    // plantUpdate.addEventListener("click", update());

    plantCard.appendChild(plantBody);
    plantCard.appendChild(plantDel);
    outputDiv.appendChild(plantCard); 

     resBut.addEventListener("click", () => {
        showIdRead(); // instead of actually clearing, just call the show form function again
     })
})
    .catch(err => console.error(err))       
})

}

const clear = () => {
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
    console.log("in the clear function");
    // document.querySelector("#doingWhat").textContent = "Clearing the history";
    document.querySelector(".outputcontainer").innerText = "";
}
}


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "read by id") {
            readById();
        } else if (event.target.innerText === "reset this page") {
            clear();
        } else if (event.target.innerText === "read" ) {
            read();
        }
    });
});