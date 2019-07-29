/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


//global variables
const students = document.querySelectorAll('.student-item');
const studentPages = 10;

//showPage function. Shows only 10 students per page.
function showPage(list, page) {
    let startIndex = (page * studentPages) - studentPages;
    let endIndex = (page * studentPages);
    for (let i = 0; i < list.length; i += 1) {
        if ([i] >= startIndex && [i] <= endIndex) {
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
    //creats the div element and sets it's class to 'pagination'
    const div = document.createElement('div');
    div.className = 'pagination';
    initialPage.appendChild(div);
    
    //creates ul element and appends it to the div
    const ul = document.createElement('ul');
    div.appendChild(ul);

    for (let i = 1; i <= pageNum ; i += 1) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let a = document.createElement('a');
        a.href = '#';
        a.textContent = [i];
        //if statement that makes the starting page visible on load
        if (i === 1) {
            a.className = 'active';
        };
        li.appendChild(a);

        //event listener to make pages appear when the anchor is clicked
        a.addEventListener('click', (e) =>{
            let activeP = document.querySelector('.active');
            activeP.classList.remove('active');
            e.target.className = 'active';
            showPage(list, e.target.textContent);
        });
    };
};
showPage(students, 1);
appendPagesLinks(students);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.