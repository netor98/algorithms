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
            
            if (selected.innerText == "1") {
                console.log("pep"); 
            }
        })
    })

});
