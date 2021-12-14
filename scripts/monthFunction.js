"use strict";

const buttonsMonth = document.querySelectorAll(".button");

const readByMonth = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the read by planting month function");
    document.querySelector("#doingWhat").textContent = "Please enter the planting month of the plants you would like to find";
    showMonth();
}

const showMonth = () => {
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
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
    const month = form.month.value; // it sometimes has a problem with this?
    const outputDiv =   document.querySelector(".outputcontainer");

    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
        } 
    while(div.firstChild){
         div.removeChild(div.firstChild);
    }
    const output = document.createElement("h2");
        output.setAttribute("class", "output-text")
        document.querySelector("#outputDiv").appendChild(output);

    document.querySelector("#doingWhat").textContent =""
    axios
    .get(`${baseURL}/getPlantByMonth/${month}`)
            .then( res => {
            console.log(res.data);
            const plants = res.data;
            for(let i = 0; i<plants.length; i++){
            const plantCol = document.createElement("div");
            plantCol.setAttribute("class", "row row-cols-2 row-cols-md-4 g-4");

            const plantCard = document.createElement("div");
            plantCard.setAttribute("class", "card");

            const plantBody = document.createElement("div");
            plantBody.setAttribute("class", "card-body");

            const plantTitle = document.createElement("h3");
            plantTitle.setAttribute("class", "card-title");
            plantTitle.innerText = `${plants[i].name}`;
            output.appendChild(plantTitle);
        

            const plantFoliage = document.createElement("p");
            plantFoliage.setAttribute("class", "card-text");
            plantFoliage.innerText = `Foliage colour: ${plants[i].foliageColour}`;
            output.appendChild(plantFoliage);

            const plantMonth = document.createElement("p");
            plantMonth.setAttribute("class", "card-text");
            plantMonth.innerText = `Planting month: ${plants[i].plantingMonth}`;
            output.appendChild(plantMonth);

            const plantPosition = document.createElement("p");
            plantPosition.setAttribute("class", "card-text");
            plantPosition.innerText = `Planting position: ${plants[i].plantingPosition}`;
            output.appendChild(plantPosition);

            const plantFlower = document.createElement("p");
            plantFlower.setAttribute("class", "card-text");
            plantFlower.innerText = `Flower colour: ${plants[i].flowerColour}`;
            output.appendChild(plantFlower);

            const plantDel = document.createElement("button");
            plantDel.setAttribute("id", "cardButton");
            plantDel.innerText = "delete";
            plantDel.addEventListener("click", () => {
                    axios
                        .delete(`${baseURL}/deletePlant/${plants[i].id}`)
                        .then(res => read())                   
                        .catch(err => console.error(err))
                        console.log(res);
        });
    
        plantBody.appendChild(plantDel);
        plantCard.appendChild(plantBody);
        plantCol.appendChild(plantDel);
        output.appendChild(plantCol);
    }

     resBut.addEventListener("click", () => {
        showIdRead(); 
     })
})
    .catch(err => console.error(err))       
})

}
buttonsMonth.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "read by planting month") {
            readByMonth();
        }
    });
});