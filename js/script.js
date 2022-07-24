/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const perPage = 9;
function showPage (list, page){
   let startIndex = (page * perPage) - perPage;
   let endIndex = (page * perPage);

   let studentList = document.getElementsByClassName('student-list')[0];
   let contents = '';

   for (let i=0; i<list.length;i++){
      let listSelected = list[i]
      if (i >= startIndex && i < endIndex){
         contents += `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${data[i].picture.large} alt="Profile Picture">
               <h3>${data[i].name.first} ${data[i].name.last}</h3>
               <span class="email">${data[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${data[i].registered.date}</span>
            </div>
       </li>
      `
      }
   }
studentList.innerHTML = contents;
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   let numOfPages = Math.ceil(list.length / perPage);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i = 1; i < numOfPages; i++){
      const li = document.createElement('li');
      li.innerHTML = `
      <li>
         <button type = "button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML("beforeend", li.innerHTML);
  }
   const buttons = document.querySelectorAll('button')
   buttons[0].className = "active";

  
   linkList.addEventListener("click", (e) => {
         if (e.target.tagName === "BUTTON"){
            const active = document.querySelector(".active");
            active.className = "";
            e.target.className = "active";
            showPage(list,e.target.textContent);
   }
})

   
   }

// Call functions