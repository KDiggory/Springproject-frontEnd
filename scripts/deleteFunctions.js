"use strict";
var id;
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
    idInput.setAttribute("name", "id");
    document.querySelector(".formContainer").appendChild(idInput);
  
    const subBut = document.createElement("button");
    subBut.setAttribute("class", "formButton");
    subBut.setAttribute("id", "submit");
    subBut.innerText = "Yes, delete!";
    document.querySelector(".formContainer").appendChild(document.createElement("br"));
    document.querySelector(".formContainer").appendChild(subBut);
  
    const resBut = document.createElement("button");
    resBut.setAttribute("class", "formButton");
    resBut.setAttribute("id", "reset");
    resBut.innerText = "No, Reset!";
    document.querySelector(".formContainer").appendChild(resBut);

    document.querySelector(".formContainer").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = this;
        id = form.id.value; // a problem reading value here? but it works
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        document.querySelector("#doingWhat").textContent = "Deleted, here is whats left - actually showing the delted one still?";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector("#outputDiv").appendChild(output);
        axios
        .delete(`${baseURLCreate}/deletePlant/${id}`)
        .then(
            console.log("in the delete axios function"))
        .catch(err => console.error(err))    
        read(); // this is showing the list with the deleted on still in
  },)
  // add event listener for reset button
  reset.addEventListener("click", () => {
    showIdDel(); 
    
  })
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
