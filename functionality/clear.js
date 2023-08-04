const d  = document;
const clearDiv = (btnClear, divMain) => {
    
    const $visualizer = d.getElementById(divMain);
    let divItems;
    
    d.addEventListener('click', e => {
        
        if (e.target.matches(btnClear)){
            divItems = $visualizer.childElementCount;
            for (let i = divItems - 1; i >= 0; i--) {
                console.log($visualizer.children);   
                $visualizer.removeChild($visualizer.children[i]);
            }
        }
    });
}

export default clearDiv;