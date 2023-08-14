const d = document;
const container = document.getElementById('visualizer');
const blocks = d.querySelectorAll('.block');

const bubleSort = (arrayElements, btnSort) => {
    let unsortedArray = [];
    d.addEventListener('click', e => {
        if (e.target.matches(btnSort)){

            for (let i = 0; i < arrayElements.length; i++) {
                unsortedArray.push(arrayElements[i]);
            }
            sort(unsortedArray);
            unsortedArray = [];
        }
    })
}


async function sort(array) {
    let newArray = array.slice();
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {

            newArray[j].style.background = "#eb4034";
            newArray[j + 1].style.background = "#eb4034";

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 200);
            })

            if (Number(newArray[j].textContent) > Number(newArray[j + 1].textContent)) {

                await sortAnimation(newArray[j], newArray[j + 1]);
                
                let swapp =  newArray[j];
                newArray[j] =  newArray[j + 1];
                newArray[j + 1] =  swapp;
                
            }
            newArray[j].style.background = "#65ff65";
            newArray[j + 1].style.background = "#65ff65";
        }
    }
}


async function sortAnimation(element, greaterElement) {
    

    const tempTransform = element.style.transform;
    element.style.transform = greaterElement.style.transform;
    greaterElement.style.transform = tempTransform;

    return new Promise((resolve) => {
        setTimeout(() => {
            container.insertBefore(greaterElement, element);
            resolve();
        }, 250);
    });
}







export default bubleSort;