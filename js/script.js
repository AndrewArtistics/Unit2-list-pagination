/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Andy Tuinstra
******************************************/


//global variables
const students = document.querySelectorAll('.student-item');
const studentPages = 10;

//showPage function. Shows only 10 students per page.
function showPage(list, page) {
    let startIndex = (page * studentPages) - studentPages;
    let endIndex = (page * studentPages);
    for (let i = 0; i < list.length; i += 1) {
        if (i >= startIndex && i < endIndex) {
            list[i].style.display = '';
        } else {
            list[i].style.display = 'none';
        };
    };
};

//appendPages function. Creates, appends and makes the pagination functional.
function appendPagesLinks(list) {
    let pageNum = Math.ceil(list.length / studentPages);
    const initialPage = document.querySelector('.page');

    //creats the div element and sets it's class to 'pagination' and appends it to the 'page' div
    const div = document.createElement('div');
    div.className = 'pagination';
    initialPage.appendChild(div);
    
    //creates ul element and appends it to the div
    const ul = document.createElement('ul');
    div.appendChild(ul);
    
    //loops the new list and anchor elements for each page.
    for (let i = 1; i <= pageNum ; i += 1) {

        //creates a list element and appends it to the ul.
        let li = document.createElement('li');
        ul.appendChild(li);

        //creates an anchor and appends it to the list elements.
        let a = document.createElement('a');
        a.href = '#';
        a.textContent = [i];
        
        //if statement that makes the starting page visible on load
        if (i === 1) {
            a.className = 'active';
        };
        li.appendChild(a);

        //event listener to make pages 'appear' when the anchor button is clicked
        a.addEventListener('click', (e) =>{
            let activeP = document.querySelector('.active');
            activeP.classList.remove('active');
            e.target.className = 'active';
            showPage(list, e.target.textContent);
        });
    };
};

//calls functions to make them work/show up on the page properly
showPage(students, 1);
appendPagesLinks(students);