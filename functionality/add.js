const d  = document;
let Xasis = 0;
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
    const newBox = document.createElement('div');
    newBox.textContent = size;
    newBox.classList.toggle('font-family');
    newBox.classList.toggle('box');
    newBox.style.transform = `translate(${Xasis})`
    div.appendChild(newBox);
    Xasis += 5;
}

export default addElement;