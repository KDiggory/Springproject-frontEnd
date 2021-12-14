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