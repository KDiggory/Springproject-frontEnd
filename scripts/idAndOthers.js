"use strict";

const buttons = document.querySelectorAll(".button");
const baseURL = "http://localhost:8080";

const readById = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the readById function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to find";
    showIdRead();
}

const showIdRead = () => {
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

    // need event listeners for each button
        subBut.addEventListener("click", () => { 
        console.log("Do i get to here? just after button click") // nope
        const id = document.querySelector("submit").value();
        axios
            .get(`${baseURL}/getById/${id}`)
            .then( res => {
                console.log("Do i get to here? in axios.get") // also nope
                const plant = res.data;
    const plantCol = document.createElement("div");
            plantCol.setAttribute("class", "col");

            const plantCard = document.createElement("div");
            plantCard.setAttribute("class", "card");

            const plantBody = document.createElement("div");
            plantBody.setAttribute("class", "card-body");

            const plantTitle = document.createElement("h2");
            plantTitle.setAttribute("class", "card-title");
            plantTitle.innerText = `${plant.name}`;
            output.appendChild(plantTitle);

            const plantFoliage = document.createElement("p");
            plantFoliage.setAttribute("class", "card-text");
            plantFoliage.innerText = `Foliage colour: ${plant.foliageColour}`;
            output.appendChild(plantFoliage);

            const plantMonth = document.createElement("p");
            plantMonth.setAttribute("class", "card-text");
            plantMonth.innerText = `Planting month: ${plant.plantingMonth}`;
            output.appendChild(plantMonth);

            const plantPosition = document.createElement("p");
            plantPosition.setAttribute("class", "card-text");
            plantPosition.innerText = `Planting position: ${plant.plantingPosition}`;
            output.appendChild(plantPosition);

            const plantFlower = document.createElement("p");
            plantFlower.setAttribute("class", "card-text");
            plantFlower.innerText = `Flower colour: ${plant.flowerColour}`;
            output.appendChild(plantFlower);

            const plantDel = document.createElement("button");
            plantDel.innerText = "delete";
            plantDel.classList.add("btn", "btn-danger");
            plantDel.addEventListener("click", () => {
                    axios
                        .delete(`${baseURL}/deletePlant/${plant.id}`)
                        .then(res => read())                   
                        .catch(err => console.error(err))
                        console.log(res);
                        

        });
        console.log("Do i get to here?")
        plantBody.appendChild(plantDel);
        plantCard.appendChild(plantBody);
        plantCol.appendChild(plantDel);
        output.appendChild(plantCol);
        
     // add event listener for reset button
     resBut.addEventListener("click", () => {
        document.getElementById("idActual").value = "";
     })
})

    .catch(err => console.error(err))
            
})

}

const read = () => {
    console.log("does it get to here? clearing!")
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the read function");
    document.querySelector("#doingWhat").textContent = "Reading all entries";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector(".outputcontainer").appendChild(output);

    axios.get(`${baseURL}/getAll`)
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
            plantDel.innerText = "delete";
            plantDel.classList.add("btn", "btn-danger");
            plantDel.addEventListener("click", () => {
                    axios
                        .delete(`${baseURL}/deletePlant/${plants[i].id}`)
                        .then(res => read())
                        .catch(err => console.error(err))
                        console.log(res);
                        document.querySelector(".outputcontainer").innerText = "";
                        read();
        });
        plantBody.appendChild(plantDel);
        plantCard.appendChild(plantBody);
        plantCol.appendChild(plantDel);
        output.appendChild(plantCol);
    }

    })

}
const clear = () => {
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    console.log("in the clear function");
    document.querySelector("#doingWhat").textContent = "Clearing the history";
    document.querySelector(".outputcontainer").innerText = "";
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