"use strict";


const buttons = document.querySelectorAll(".button");
const baseURL = "http://localhost:8080";

/// CREATE
const create = () => {
    console.log("in the create function");
    clear();
    document.querySelector("#doingWhat").textContent = "Please enter the details of the plant you want to add to the database";
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
  flowerInput.setAttribute("name", "flowerCol");
  document.querySelector(".formContainer").appendChild(flowerInput);
  
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
    const data = {
        name: form.plantName.value, 
        foliageColour: form.foliageColour.value,
        plantingMonth: form.month.value,
        plantingPosition: form.position.value,
        flowerColour: form.flowerCol.value
    };
    console.log(data);
    axios
        .post(`${baseURL}/createPlant/`, data)
        .then(
            console.log("in the create axios function, after post"))
        .catch(err => console.error(err));   
        clear();
        document.querySelector("#doingWhat").textContent = "Created!";
        
},
)
document.querySelector(".formContainer").addEventListener("reset", function(event) {
    create(); 
 })
}

/// READ
const read = () => {
    clear();
    document.querySelector("#doingWhat").textContent = "Reading all entries";
    const outputDiv = document.querySelector("#outputDiv");

    axios.get(`${baseURL}/getAll`)
    .then(res => {
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
            info.innerText = `\r\nFoliage colour: ${plants[i].foliageColour}\r\n
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
        }        
        );
        plantCard.appendChild(plantBody);
        plantCard.appendChild(plantDel);
        outputDiv.appendChild(plantCard); 
    }

    })
}

/// READ BY ID
const readById = () => {
    clear();
    console.log("in the readById function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to find";
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
            info.innerText = `\r\n
            Foliage colour: ${plant.foliageColour}\r\n
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
    plantCard.appendChild(plantBody);
    plantCard.appendChild(plantDel);
    outputDiv.appendChild(plantCard); 

    document.querySelector(".formContainer").addEventListener("reset", function(event) {
        readById();  
     })
})
    .catch(err => console.error(err))       
})

}

/// CLEAR
const clear = () => {
    const doing =  document.querySelector("#doingWhat");
    while(doing.firstChild){
        doing.removeChild(doing.firstChild);
    }
    const div =   document.querySelector(".formContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const outputDiv =   document.querySelector(".outputcontainer");
    while(outputDiv.firstChild){
        outputDiv.removeChild(outputDiv.firstChild);
    console.log("in the clear function");
}
    }

/// READ BY NAME
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

    // READ BY MONTH
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

    /// UPDATE

    let lastupdated;

    const update = () => {
        clear();
    console.log("in the update function");
    document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to update and the new details";
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
    flowerInput.setAttribute("name", "flowerCol");
    document.querySelector(".formContainer").appendChild(flowerInput);
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    
    const idInputLabel = document.createElement("label");
    idInputLabel.setAttribute("for", "plantId");
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
    subBut.setAttribute("type", "submit");
    subBut.innerText = "Submit";
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    document.querySelector(".formContainer").appendChild(subBut);
    
    const resBut = document.createElement("button");
    resBut.setAttribute("class", "formButton");
    resBut.setAttribute("type", "reset");
    resBut.innerText = "Reset";
    document.querySelector(".formContainer").appendChild(resBut);
    // add event listener for submit button
    
    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        lastupdated  = form.plantId.value;
        const data = {
            name: form.plantName.value, 
            foliageColour: form.foliageColour.value,
            plantingMonth: form.month.value,
            plantingPosition: form.position.value,
            flowerColour: form.flowerCol.value,
            id: form.plantId.value
        };
     
      axios
          .put(`${baseURL}/updatePlant/${lastupdated}`, data)
          .then(
              console.log("in the update axios function, after put")) 
          .catch(err => console.error(err))
          clear();
          document.querySelector("#doingWhat").textContent = "Updated!";
    },)
    // add event listener for reset button
    document.querySelector(".formContainer").addEventListener("reset", function(event) {
        update(); 
      
    })
    }

    /// Delete 
    let id;

    const deleteById = () => {
        clear();
        console.log("in the deleteById function");;
        document.querySelector("#doingWhat").textContent = "Please enter the id of the plant you would like to delete from the database";
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
        subBut.setAttribute("type", "submit");
        subBut.innerText = "Yes, delete";
        document.querySelector(".formContainer").appendChild(document.createElement("br"));
        document.querySelector(".formContainer").appendChild(subBut);
      
        const resBut = document.createElement("button");
        resBut.setAttribute("class", "formButton");
        resBut.setAttribute("type", "reset");
        resBut.innerText = "No, Reset!";
        document.querySelector(".formContainer").appendChild(resBut);
    
        document.querySelector(".formContainer").addEventListener("submit", function(event) {
            event.preventDefault();
            const form = this;
            const plantId = form.plantId.value; // a problem reading value here? but it works
            document.querySelector("#doingWhat").textContent = "Deleted, here is whats left - actually showing the delted one still?";
        const output = document.createElement("h2");
        output.setAttribute("class", "output-text")
        document.querySelector("#outputDiv").appendChild(output);
            axios
            .delete(`${baseURL}/deletePlant/${plantId}`)
            .then(
                console.log("in the delete axios function"))
            .catch(err => console.error(err))    
            read(); 
      },)
    
      document.querySelector(".formContainer").addEventListener("reset", function(event) {
        deleteById(); 
        
      })
      }



/// SET BUTTONS

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.innerText === "create") {
            create();
        } else if (event.target.innerText === "read") {
            read();
        } else if (event.target.innerText === "read by id" ) {
            readById();
        } else if (event.target.innerText === "read by name" ) {
            readByName();
        }else if (event.target.innerText === "read by planting month" ) {
            readByMonth();
        }else if (event.target.innerText === "update" ) {
            update();
        }else if (event.target.innerText === "delete" ) {
            deleteById();
        }else if (event.target.innerText === "reset this page" ) {
            clear();
        }
    });
});