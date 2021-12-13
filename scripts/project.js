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


function highlightForm() {
    for (let docs of document.querySelectorAll("#inputBox")) {
        const highlightGreen = docs;
        highlightGreen.style.background = "rgba(228,170,158,255)";
    }
    const leaveWhite = document.querySelector("#idInput");
    leaveWhite.style.background = "transparent";
}

function highlightIdInput() {
    const selectIdInput = document.querySelector("#idInput");
    selectIdInput.style.background = "rgba(228,170,158,255)";

}

function deselectIdInput() {
    const selectIdInput = document.querySelector("#idInput");
    selectIdInput.style.background = "transparent";

}
function deselectForm() {
    for (let docs of document.querySelectorAll("#inputBox")) {
        const highlightGreen = docs;
        highlightGreen.style.background = "transparent";
    }
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