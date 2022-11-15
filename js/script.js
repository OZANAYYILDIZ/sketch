const gridContainer = document.querySelector("#grid-container");

//gridContainer.addEventListener("mouseover", () => {
//    gridContainer.classList.add("painted");
//})

let div = document.createElement("div");
gridContainer.appendChild(div).setAttribute("class", "grid-row");


function createOneRow(number){
    let gridRow = document.querySelector(".grid-row");
    if(number == 64){
        for(let index = 0; index < number * 64; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-s squares");
        }
    } else if(number == 256){
        for(let index = 0; index < number * 4; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-m squares");
        }
    } else if(number == 1024){
        for(let index = 0; index < number / 4 ; index++){
            let div = document.createElement("div");
            gridRow.appendChild(div).setAttribute("class", "grid-item-l squares");
        }
    }
}

function styleAdd(){
    const squares = document.querySelectorAll(".squares");

    for(let index = 0 ; index < squares.length ; index++){
        squares[index].addEventListener("mouseover", () => {
            squares[index].classList.add("painted");
        })
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
    styleAdd();
})

const button = document.querySelector("#clear-btn");
button.addEventListener("click", function(){
    let gridRow = document.querySelector(".grid-row");
    while(gridRow.firstChild){
        gridRow.removeChild(gridRow.lastChild)
    }
    const sizeValue = select.value ** 2;
    createOneRow(sizeValue);
    styleAdd();
})