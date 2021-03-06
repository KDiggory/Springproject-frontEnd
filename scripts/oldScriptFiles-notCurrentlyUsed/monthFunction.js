"use strict";


const readByMonth = () => {
    clear();
    console.log("in the read by planting month function");
    document.querySelector("#doingWhat").textContent = "Please enter the planting month of the plants you would like to find";
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
    const month = form.month.value; // it sometimes has a problem with this?
    const outputDiv = document.querySelector("#outputDiv");
    clear();

    document.querySelector("#doingWhat").textContent =""
    axios
    .get(`${baseURL}/getPlantByMonth/${month}`)
            .then( res => {
            console.log(res.data);
            const plants = res.data;
            for(let i = 0; i<plants.length; i++){
                console.log(plants[i]); 
  
                const plantCard = document.createElement("div");
                plantCard.setAttribute("class", "card");
    
                const plantBody = document.createElement("div");
                plantBody.setAttribute("class", "card-body");
                plantBody.setAttribute("style", "width: 18rem; ");
                
    
                const plantTitle = document.createElement("h3");
                plantTitle.setAttribute("class", "card-title");
                plantTitle.innerText = `${plants[i].name}\r\n`;
                plantBody.appendChild(plantTitle);
    
                const info = document.createElement("p");
                info.setAttribute("class", "card-text");
                info.innerText = `\r\n
                Foliage colour: ${plants[i].foliageColour}\r\n
                Planting month: ${plants[i].plantingMonth}\r\n
                Planting position: ${plants[i].plantingPosition}\r\n
                Flower colour: ${plants[i].flowerColour}\r\n
                ID: ${plants[i].id}\r\n `;
                 plantBody.appendChild(info);
    
                const plantDel = document.createElement("button");
                plantDel.setAttribute("id", "cardButton");
                plantDel.innerText = "delete";
    
                plantDel.addEventListener("click", () => {
                        axios
                            .delete(`${baseURL}/deletePlant/${plants[i].id}`)
                            .then(res => read())
                            .catch(err => console.error(err))
                            console.log(res);
                            document.querySelector(".outputcontainer").innerText = "";
                            read();
            });
            plantCard.appendChild(plantBody);
            plantCard.appendChild(plantDel);
            outputDiv.appendChild(plantCard); 
    }

    document.querySelector(".formContainer").addEventListener("reset", function(event) {
        readByMonth(); 
     })
})
    .catch(err => console.error(err))       
})
}