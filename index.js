const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(ele => {
    const select = document.querySelector('.select');
    const caret = document.querySelector('.caret');
    const menu = document.querySelector('.menu');
    const options = document.querySelectorAll('.menu li');
    const selected = document.querySelector('.selected');



    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');  
        menu.classList.toggle('menu-open');

    });

    options.forEach(ele => {
        ele.addEventListener('click', () => {
            selected.innerText = ele.innerText;
            select.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            ele.classList.add('active');
            
            if (selected.innerText == "Burbuja") {
                showBuble();
                console.log("pep");
                console.log(array); 
                array = [];
            }
        })
    })

});


/**** BUBLE SORTING ****/
const $visualizer = document.getElementById('visualizer');
let aux = 0;
let array = new Array();
let length = 0;


function generateRandomNumbers(length) {
    for (let i = 0; i < length; i++) {
        let randomNumber = Number(prompt(`Type the length of the ${i+1} element`));
        array.push(randomNumber);
    }
}

function askLengthArray() {
    return Number(prompt("Type the length of the array"))
}

function bubleSort(array){
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] > newArray[j+1]) {
                aux = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = aux;
            }
        }
    }
    return newArray;
}

async function showBuble(){
    try {
        length = await askLengthArray();
        generateRandomNumbers(length);
        let sortArray = bubleSort(array);
        createElement(length, sortArray);
    } catch (err) {
        console.log(err);
    }
}

function createElement(length, array) {
    for (let i = 0; i < length; i++){
        const newBox = document.createElement('div');
        const valueBox = document.createElement('p');
        valueBox.textContent = array[i].toString();
        valueBox.classList.toggle('font-family');
        newBox.classList.toggle('box');
        newBox.appendChild(valueBox);
        $visualizer.appendChild(newBox);
    }

}








