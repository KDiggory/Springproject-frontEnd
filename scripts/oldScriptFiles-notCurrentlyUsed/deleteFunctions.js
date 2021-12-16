"use strict";
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
    subBut.innerText = "submit";
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
