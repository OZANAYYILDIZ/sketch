const gridContainer = document.querySelector("#grid-container");

let div = document.createElement("div");
gridContainer.appendChild(div).setAttribute("class", "grid-row");


function createOneRow(number){
    let gridRow = document.querySelector(".grid-row");
    if(number == 64){
        for(let index = 0; index < number * 16; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-s");
        }
    } else if(number == 256){
        for(let index = 0; index < number; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-m");
        }
    } else if(number == 1024){
        for(let index = 0; index < number / 16 ; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-l");
        }
    }
}

const select = document.querySelector("#grid-size");

select.addEventListener("change", function(){
    let gridRow = document.querySelector(".grid-row");
    while(gridRow.firstChild){
        gridRow.removeChild(gridRow.lastChild)
    }
    const sizeValue = select.value ** 2;
    createOneRow(sizeValue);
})