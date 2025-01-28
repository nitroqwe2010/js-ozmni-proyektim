// document.getElementById('addButton').addEventListener('click', function() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();
  
//     if (taskText !== '') {
//       const taskList = document.getElementById('taskList');
  
//       // Create new task element
//       const taskItem = document.createElement('li');
//       taskItem.innerHTML = `
//         ${taskText}
//         <button class="delete">Delete</button>
//       `;
  
//       // Add delete functionality
//       taskItem.querySelector('.delete').addEventListener('click', function() {
//         taskItem.remove();
//       });
  
//       // Append new task to the list
//       taskList.appendChild(taskItem);
  
//       // Clear the input field
//       taskInput.value = '';
//     }
//   });
  
//   // Optional: Allow pressing Enter to add a task
//   document.getElementById('taskInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//       document.getElementById('addButton').click();
//     }
//   });
  
let ism = prompt("ismingizni kiriting")
let email = document.querySelector("email")
let h1 = document.querySelector(".oneni")
let button = document.querySelector(".submit")
h1.textContent = (`salom ${ism}!`)
//  button.addEventListener ("click", () => {
//     alert (`sining ismingiz:${ism.textContent}\n email-ingiz:${email.textContent} shular hammasi yuborildi`)
//  })

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert(`siznig narsalarnigiz yuborildi!`);
  });
  