const gridContainer = document.querySelector("#grid-container");

function createOneRow(number){
    let div = document.createElement("div");
    gridContainer.appendChild(div).setAttribute("class", "grid-row");
    const gridRow = document.querySelector(".grid-row");
    for(let index = 0; index < number; index++){
        let div = document.createElement("div");
        gridRow.appendChild(div).setAttribute("class", "grid-item");
    }
}


function createGrids(number){
    for(let index = 0; index < number; index++){
        createOneRow(number);
    }
}



const select = document.querySelector("#grid-size");

// ihtiyacım olan seçim değiştiğinde fonksiyonu sıfırdan yapması
// aşağıdaki function bunu yapmıyor önceki gridin üstüne ekliyor

select.addEventListener("change", function(){
    const sizeValue = select.value;
    createGrids(sizeValue);
})