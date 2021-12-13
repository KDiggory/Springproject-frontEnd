"use strict";

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();

    console.log("Start of promise");
    setTimeout(() => {
        if (rand > 0.5) {
            resolve("Yay!");    
        } else {
            reject("Boo!");
        }
    }, 5_000);  

    console.log("End of promise");
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

promisesPromises.then(onSuccess).catch(onFailure);

// event listeners for all buttons
const buttons = document.querySelectorAll(".button");
// const output = document.querySelector("div#history");

/// Need to do:
// complete functions
// make functions for submit and reset
// make it so form clears after entry


function operations(event) {
    if (event.target.innerText ==="clear") {
        counter.value = null;
    } else if ( event.target.innerText === "="){
        const current = counter.value;
        counter.value = null;
    evaluate(op, current, saved);
    }else {
    const current = counter.value;
    counter.value = null;
    op = event.target.innerText ;
    saved = current;
    addHistory(`${current} ${op} `)
    }
}

const baseURL = "http://localhost:8080";

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

  submit.addEventListener("click", () => {
    const data = {
        name: nameActual.value(),
        foliageColour: foliageColActual.value(),
        plantingMonth: monthActual.value(),
        plantingPosition: positionActual.value(),
        flowerCiolour: flowerActual.value()   
    };
    axios
        .post(`${baseURL}/createPlant/${data}`)
        .then(res => read())
        .catch(err => console.error(err))
        console.log(res);
},)
 // add event listener for reset button
 reset.addEventListener("click", () => {
    document.getElementById('nameActual').value = "";
    document.getElementById('foliageColActual').value = "";
    document.getElementById('monthActual').value = "";
    document.getElementById('positionActual').value = "";
    document.getElementById('flowerActual').value = "";
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
const readById = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the readById function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to find";
    showIdRead();
}

const readByName = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    console.log("in the read by name function");
    document.querySelector("#doingWhat").textContent = "Please enter the name of the plants you would like to find";
    showName();
}

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
}

const showName = () => {
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
  nameInput.setAttribute("id", "inputBoxActual");
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
    nameInput.setAttribute("id", "inputBoxActual");
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
  }

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
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
  
    const subBut = document.createElement("button");
    subBut.setAttribute("class", "formButton");
    subBut.setAttribute("id", "submit");
    subBut.innerText = "Yes, delete that plant";
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    document.querySelector(".formContainer").appendChild(subBut);
  
    const resBut = document.createElement("button");
    resBut.setAttribute("class", "formButton");
    resBut.setAttribute("id", "reset");
    resBut.innerText = "Nope, changed my mind. Reset!";
    document.querySelector(".formContainer").appendChild(resBut);
}
const deleteAll = () => {
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
}
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    console.log("in the deleteAll function");
    document.querySelector("#doingWhat").textContent = "Deleting all entries from the database!!";
    areYouSure();
}
const areYouSure = () => {

const subBut = document.createElement("button");
  subBut.setAttribute("class", "formButton");
  subBut.setAttribute("id", "submit");
  subBut.innerText = "Yes, do it!";
  document.querySelector(".formContainer").appendChild(subBut);


  const resBut = document.createElement("button");
  resBut.setAttribute("class", "formButton");
  resBut.setAttribute("id", "reset");
  resBut.innerText = "No, what am I thinking!?";
  document.querySelector(".formContainer").appendChild(resBut);
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
        if (event.target.innerText === "create") {
            create();
        } else if (event.target.innerText === "read") {
            read();
        } else if (event.target.innerText === "read by id") {
            readById();
        } else if (event.target.innerText === "update") {
            update();
        } else if (event.target.innerText === "delete") {
            deleteById();
        } else if (event.target.innerText === "reset this page") {
            clear();
        } else if (event.target.innerText === "delete all entries") {
            deleteAll();
        }else if (event.target.innerText === "read by name") {
            readByName();
        }else if (event.target.innerText === "read by planting month") {
            readByMonth();
        }else if (event.target.innerText === "update by name") {
            updateByName();
        } else {

        }
    });
});


       //         THINGS THAT DIDNT MAKE THE FINAL             //

// This was to highlight which part of the form needed to be filled in - but I changed my mind so when you click on each option the things you need are shown instead

// function highlightForm() {
//     for (let docs of document.querySelectorAll("#inputBox")) {
//         const highlightGreen = docs;
//         highlightGreen.style.background = "rgba(228,170,158,255)";
//     }
//     const leaveWhite = document.querySelector("#idInput");
//     leaveWhite.style.background = "transparent";
// }

// function highlightIdInput() {
//     const selectIdInput = document.querySelector("#idInput");
//     selectIdInput.style.background = "rgba(228,170,158,255)";

// }

// function deselectIdInput() {
//     const selectIdInput = document.querySelector("#idInput");
//     selectIdInput.style.background = "transparent";

// }
// function deselectForm() {
//     for (let docs of document.querySelectorAll("#inputBox")) {
//         const highlightGreen = docs;
//         highlightGreen.style.background = "transparent";
//     }
// }