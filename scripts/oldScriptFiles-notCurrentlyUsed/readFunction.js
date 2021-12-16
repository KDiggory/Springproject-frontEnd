"use strict";


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
        // plantUpdate.addEventListener("click", update());

        plantCard.appendChild(plantBody);
        plantCard.appendChild(plantDel);
        outputDiv.appendChild(plantCard); 
    }

    })

}