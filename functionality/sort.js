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
            newArray[j].style.background = "#ff4949";
            newArray[j + 1].style.background = "#ff4949";

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 500);
            })

            if (Number(newArray[j].textContent) > Number(newArray[j + 1].textContent)) {

                await sortAnimation(newArray[j], newArray[j + 1]);
                
                let swapp =  await newArray[j];
                newArray[j] =  await newArray[j + 1];
                newArray[j + 1] =  await swapp;
                
            }
            newArray[j].style.background = "#8965ff";
            newArray[j + 1].style.background = "#8965ff";

        }
        newArray[newArray.length - i - 1].style.background = "#13ce67";
    }
    newArray[0].style.background = "#13ce67";
}


async function sortAnimation(element, greaterElement) {
    return new Promise((resolve) => {
        
        const tempTransform = element.style.transform;
        element.style.transform = greaterElement.style.transform;
        greaterElement.style.transform = tempTransform;

    

        window.requestAnimationFrame( function() {
            setTimeout(() => {
                container.insertBefore(greaterElement, element);
                resolve();
            }, 500)
        })
    });
}


export default bubleSort;