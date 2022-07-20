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

   let studentList = document.getElementsByClassName('student-list');
   let contents = studentList.innerHTML;
   contents = '';

   for (let i=0; i<list.length;i++){
      let listSelected = list[i]
      if (i >= startIndex && i < endIndex){
         contents += `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" ${data[i].picture.large} alt="Profile Picture">
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
      let button = document.createElement(li);
      button.innerHTML = `
      <li>
         <button type = "button">${i}</button>
      </li>
      `;
      linkList.appendChild(button);
  }

   button.insertAdjacentHTML("beforeend",linkList);

   const button1 = document.querySelector('button')
   button1.className = "active";


  
  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
   linkList.addEventListener("click", (e) => { 
      if (button.className === "active") {
         button.className = "";
      }else {
         button.className = "active";
      }


})

   
   }

// Call functions
