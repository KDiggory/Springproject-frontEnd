"use strict";

// event listeners for all buttons
const buttons = document.querySelectorAll(".button");
// const output = document.querySelector("div#history");


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

/// Need to do:
// complete functions
// make functions for submit and reset
// make it so form clears after entry


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

const create = () => {
    console.log("in the create function");
    // highlightForm();
    console.log("what do you want to create")
    document.querySelector("#doingWhat").textContent = "Please enter the details of the plant you want to add to the database";
    


    const output = document.createElement("h2");
    output.classList.add("output-text");
    output.innerText = "This is some output text";
    document.querySelector(".outputcontainer").appendChild(output);
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
  flowerInputLabel.setAttribute("class", "input");
  flowerInput.setAttribute("id", "flowerActual");
  flowerInput.setAttribute("name", "flowerCol");
  document.querySelector(".formContainer").appendChild(flowerInput);
  document.querySelector(".formContainer").appendChild(document.createElement("br"));

  const subBut = document.createElement("button");
  subBut.setAttribute("class", "formButton");
  subBut.setAttribute("id", "submit");
  subBut.innerText = "Submit";
  document.querySelector(".formContainer").appendChild(subBut);

  const resBut = document.createElement("button");
  resBut.setAttribute("class", "formButton");
  resBut.setAttribute("id", "reset");
  resBut.innerText = "Reset";
  document.querySelector(".formContainer").appendChild(resBut);
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
        }
        else if (event.target.innerText === "delete all entries") {
            deleteAll();
        }else if (event.target.innerText === "read by name") {
            readByName();
        }else if (event.target.innerText === "read by planting month") {
            readByMonth();
        }else if (event.target.innerText === "update by name") {
            updateByName();
        }
    });
});