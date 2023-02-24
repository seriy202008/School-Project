let selectItems = document.querySelectorAll(".select--item");
let tableRows = document.querySelectorAll(".table--row");
let selectBtn = document.querySelector(".select--btn");
let selectList = document.querySelector(".select--list");

selectBtn.addEventListener('click', function () {
    selectList.classList.toggle('_active');
    selectBtn.classList.toggle('_active');
})

for (let i = 0; i < selectItems.length; i++) {
    let selectItem = selectItems[i];
    selectItem.addEventListener('click', function () {
        let category = selectItem.dataset.category;
        if (category === 'difficulty') {
            for (let j = 0; j < tableRows.length; j++) {
                let tableRow = tableRows[j];
                let difficulty = tableRow.dataset.difficulty;
                console.log(difficulty);
                tableRow.style.order = difficulty;
                selectBtn.textContent = selectItem.textContent;
            }
        }
        if (category === 'popularity') {
            for (let j = 0; j < tableRows.length; j++) {
                let tableRow = tableRows[j];
                let popularity = tableRow.dataset.popularity;
                tableRow.style.order = popularity;
                selectBtn.textContent = selectItem.textContent;
            }
        }
        if (category === 'perspective') {
            for (let j = 0; j < tableRows.length; j++) {
                let tableRow = tableRows[j];
                let perspective = tableRow.dataset.perspective;
                tableRow.style.order = perspective;
                selectBtn.textContent = selectItem.textContent;
            }
        }
    })
}

window.addEventListener('resize', function () {
    if (document.documentElement.scrollWidth <= 992) {
        document.querySelector(".table--head .table--cell:first-child").textContent = 'ЯП';
    }
    else {
        document.querySelector(".table--head .table--cell:first-child").textContent = 'Язык Программирования';
    }
})