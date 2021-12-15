"use strict";

const baseURLRead = "http://localhost:8080";

const read = () => {
    clear();
//     const div =   document.querySelector(".formContainer");
//     while(div.firstChild){
//         div.removeChild(div.firstChild);
//     }
//     const outputDiv =   document.querySelector(".outputcontainer");
//     while(outputDiv.firstChild){
//         outputDiv.removeChild(outputDiv.firstChild);
// }
    
    document.querySelector("#doingWhat").textContent = "Reading all entries";
    const output = document.createElement("h2");
    output.setAttribute("class", "output-text")
    document.querySelector("#outputDiv").appendChild(output);
    

    axios.get(`${baseURLRead}/getAll`)
    .then(res => {
        const plants = res.data;
        for(let i = 0; i<plants.length; i++){
            console.log(plants[i]); 
            const plantCol = document.createElement("div");
            plantCol.setAttribute("class", "row row-cols-2 row-cols-md-4 g-4");
                
            const plantCard = document.createElement("div");
            plantCard.setAttribute("class", "card");

            const plantBody = document.createElement("div");
            plantBody.setAttribute("class", "card-body");

            const plantTitle = document.createElement("h3");
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

            const plantId = document.createElement("p");
            plantId.setAttribute("class", "card-text");
            plantId.innerText = `ID: ${plants[i].id}`;
            output.appendChild(plantId);

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
        plantBody.appendChild(plantDel);
        plantCard.appendChild(plantBody);
        plantCol.appendChild(plantDel);
        output.appendChild(plantCol);
    }

    })

}