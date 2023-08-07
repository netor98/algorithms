const d = document;

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


function sort(array) {
    let newArray = array;
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - 1; j++) {
            if (Number(newArray[j].textContent) > Number(newArray[j + 1].textContent)) {
                let iniPosition = newArray[j].getBoundingClientRect();
                let maxPosition = newArray[j + 1].getBoundingClientRect();

                
                
                
                let amount = Math.floor(maxPosition.left - iniPosition.left);
                sortAnimation(amount ,newArray[j], newArray[j + 1]);
                
                let swapp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = swapp;
            }
        }
    }
    newArray.forEach(element => {
        console.log(element.innerText);
    });
}


function sortAnimation(amount, element, greaterElement) {

    let initalPosition = 0;
    let maxPosition = 0;


    greaterElement.style.left = "0px";
    let interval = setInterval(() => {
        if (initalPosition === amount) clearInterval(interval);
        else {
            initalPosition++;
            element.style.left = `${initalPosition}px`;
            
            maxPosition--;
            greaterElement.style.left = `${maxPosition}px`;
        }
    }, 20)
}






export default bubleSort;