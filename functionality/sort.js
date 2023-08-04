const d = document;

const bubleSort = (arrayElements, btnSort) => {
    let sortedArray = [];
    d.addEventListener('click', e => {
        if (e.target.matches(btnSort)){

            for (let i = 0; i < arrayElements.length; i++) {
                sortedArray.push(arrayElements[i]);
            }
            sort(sortedArray);
            sortedArray = [];
        }
    })
}


function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (Number(array[j].textContent) > Number(array[j + 1].textContent)) {
                let swapp = array[j].textContent;
                array[j].textContent = array[j + 1].textContent
                array[j + 1].textContent = swapp;
            }
        }
    }
}



export default bubleSort;