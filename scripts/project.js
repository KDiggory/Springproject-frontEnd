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