"use strict";

const buttonsDel = document.querySelectorAll(".button");


const baseURLDelete = "http://localhost:8080";

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

    buttonsDel.forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.innerText === "delete") {
                deleteById();
            } else if (event.target.innerText === "reset this page") {
                clear();
            } else if (event.target.innerText === "delete all entries") {
                deleteAll();
            }
        });
    });