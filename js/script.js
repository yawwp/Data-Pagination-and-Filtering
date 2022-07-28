/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const perPage = 9; //establishing number of students on the page




/*
Creating the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page){

   // Establishing the start and end index for which students will be displayed on the page
   let startIndex = (page * perPage) - perPage; 
   let endIndex = (page * perPage);


   // Interacting with the DOM by selecting the class name 'student-list'. 
   // This gives us an HTMLCollection. We select the first one out of the collection
   let studentList = document.getElementsByClassName('student-list')[0];
   let contents = ''; // Creating an empty string

   //Looping through the list. Here we set a template literal and iterate it into the empty string variable 'contents'
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
}
studentList.innerHTML = contents; //Setting the HTML content to the output variable 'content'

/*
Creating the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   let numOfPages = Math.ceil(list.length / perPage); //equation to set the number of pagination will be on the page
   const linkList = document.querySelector('.link-list'); //Selecting the class 'link-list'
   linkList.innerHTML = ''; //Setting the html content to an empty string

/*
Creating a loop that loops over the numOfPages. Also we create a new element 'li' and 
set the HTML content to a template literal. After that we then inserts the element 
node 'li.innerHTML' at the position inside the target element, after its last child.
*/ 
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
   buttons[0].className = "active"; //Setting out first button HTML Collection to active

  
/*
Creating an event listener on linkList. This event will list for a click by the user.
We set a conditional where, if the page number is clicked, that number page will be added 
the class 'active' and the button that had the 'active class will be then removed. 
*/ 
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
showPage(data,1);
addPagination(data);