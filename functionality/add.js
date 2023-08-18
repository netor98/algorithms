const d  = document;
let Xaxis = 0;
let Yaxis = 0
const addElement = (btnAdd, input, divMain) => {
    
    const $input = d.getElementById(input);
    const $visualizer = d.getElementById(divMain);

    d.addEventListener('click', e => {
        if (e.target.matches(btnAdd)){
            createElement($input.value, $visualizer);
            $input.value = "";
        }
    });
}


function createElement(size, div) {
    if (div.childElementCount <= 0) Xaxis = 0;
    const newBox = document.createElement('div');
    newBox.textContent = size;
    newBox.classList.add('font-family');
    newBox.classList.add('box');
    if (Xaxis > 100) Xaxis = 0;
    newBox.style.transform = `translate(${Xaxis}px, 0px)`
    div.appendChild(newBox);
    Xaxis += 10;
}

export default addElement;