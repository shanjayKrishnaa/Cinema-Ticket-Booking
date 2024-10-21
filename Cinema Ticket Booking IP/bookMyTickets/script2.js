
let emmanuel_TV_Form = document.addEventListener('submit', function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById('age').value;
  let contact = document.getElementById('contact').value;
  let email = document.getElementById('email').value;
  let movie = document.getElementById('movie').value;
  let seat = document.getElementById('seat').value;
  let dateSelect = document.getElementById('date-select').value;
  let time = document.getElementById('time').value;
  let ticketType = document.getElementById('ticketType').value;
  let numTickets = document.getElementById('numTickets').value;   
  let sectionSIX = document.getElementById('sectionSIX');
  let centerResult = document.getElementById('centerResult');

  let isValid = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('ageError').textContent = '';
  document.getElementById('contactError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('movieError').textContent = '';
  document.getElementById('seatError').textContent = '';
  document.getElementById('date-select').textContent = '';
  document.getElementById('time').textContent = '';
  document.getElementById('ticketType').textContent = '';
  document.getElementById('numTickets').textContent = '';
 
  
  if (name === '') {
    document.getElementById("nameError").textContent = 'Name is required';
    isValid = false;
  }
  else if(name.length < 10){
    document.getElementById("nameError").textContent = "surname and firstname is reqired.";
    isValid = false;
    
  }

  if (age === "") {
    
    document.getElementById('ageError').textContent = "Age is required.";
    
    isValid = false;
  }
  else if (isNaN(age)) {
    document.getElementById('ageError').textContent = "Only number is required.";
    
    isValid = false;
  }
  
  
  else if (age < 18) {
    document.getElementById('ageError').textContent = "You are a minor. Age must be 18 or above.";
    
    isValid = false;
  }
  
 


  if (contact === '') {
    document.getElementById("contactError").textContent = 'Phone number is required';

    isValid = false;
  }
  else if(contact.length !== 11){
    document.getElementById("contactError").textContent = "Phone number is incomplete";

    isValid = false;
  }
  else if (isNaN(contact)) {
    document.getElementById('contactError').textContent = "Only number is required.";
    
    isValid = false;
  }



  if(email === ''){
    document.getElementById("emailError").textContent = 'Email is required';

    isValid = false;
  }
  else if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)){
    document.getElementById("emailError").textContent = 'Email is Incorrect';

    isValid = false;
  }


  if (movie === '') {
    document.getElementById("movieError").textContent = 'Kindly Select a movie';
    isValid = false;
  }


  if (seat === '') {
    document.getElementById("seatError").textContent = 'Kindly Select a seat';
    isValid = false;
  }

  if (dateSelect === '') {
    document.getElementById("date-selectError").textContent = 'Kindly Select movie Date';
    isValid = false;
  }

  if (time === '') {
    document.getElementById("timeError").textContent = 'Kindly Select a movie time';
    isValid = false;
  }

  if (ticketType === '') {
    document.getElementById("ticketTypeError").textContent = 'Kindly Select the ticket type';
    isValid = false;
  }

  if (numTickets === '') {
    document.getElementById("numTicketsError").textContent = 'Kindly enter the number of ticket to purchase';
    isValid = false;
  }

  else if (numTickets === 0) {
    document.getElementById("numTicketsError").textContent = 'Tickect must be at least 1';
    isValid = false;
  }

  else if (numTickets > 10) {
    document.getElementById("numTicketsError").textContent = 'Tickect is not available';
    isValid = false;
  }else{
    sectionSIX.style.display = "none";
    centerResult.style.display = "flex";
    document.getElementById('movieResult').innerHTML = `Movie: ${movie}`;   
    document.getElementById('ticketTypeResult').innerHTML = `Chosen ticket type: ${ticketType}`;
    document.getElementById('dateResult').innerHTML = `Date: ${date-select}`;
    document.getElementById('timeResult').innerHTML = `Time: ${time}`;
    document.getElementById('numTicketResult').innerHTML = `Number of ticket(s): ${numTickets}`;
    document.getElementById('seatResult').innerHTML = `Seat number: ${seat}`;
    document.getElementById('priceResult').innerHTML = `Total Price: ${numTickets * ticketType}`;

    return;
  }

})

// function emmanuel_TV_Validation(e) {
//   e.preventDefault();
//  alert('workind')
//   let name = document.getElementById("name").value;
//   let age = document.getElementById('age').value;
//   let contact = document.getElementById('contact').value;
//   let email = document.getElementById('email').value;
//   let movie = document.getElementById('movie').value;
//   let seat = document.getElementById('seat').value;
//   let dateSelect = document.getElementById('date-select').value;
//   let time = document.getElementById('time').value;
//   let ticketType = document.getElementById('ticketType').value;
//   let numTickets = document.getElementById('numTickets').value;   
//   let sectionSIX = document.getElementById('sectionSIX');
//   let centerResult = document.getElementById('centerResult');

//   let isValid = true;

//   document.getElementById('nameError').textContent = '';
//   document.getElementById('ageError').textContent = '';
//   document.getElementById('contactError').textContent = '';
//   document.getElementById('emailError').textContent = '';
//   document.getElementById('movieError').textContent = '';
//   document.getElementById('seatError').textContent = '';
//   document.getElementById('date-select').textContent = '';
//   document.getElementById('time').textContent = '';
//   document.getElementById('ticketType').textContent = '';
//   document.getElementById('numTickets').textContent = '';
 
  
//   if (name === '') {
//     document.getElementById("nameError").textContent = 'Name is required';
//     isValid = false;
//   }
//   else if(name.length < 10){
//     document.getElementById("nameError").textContent = "surname and firstname is reqired.";
//     isValid = false;
    
//   }

//   if (age === "") {
    
//     document.getElementById('ageError').textContent = "Age is required.";
    
//     isValid = false;
//   }
//   else if (isNaN(age)) {
//     document.getElementById('ageError').textContent = "Only number is required.";
    
//     isValid = false;
//   }
  
  
//   else if (age < 18) {
//     document.getElementById('ageError').textContent = "You are a minor. Age must be 18 or above.";
    
//     isValid = false;
//   }
  
 


//   if (contact === '') {
//     document.getElementById("contactError").textContent = 'Phone number is required';

//     isValid = false;
//   }
//   else if(contact.length !== 11){
//     document.getElementById("contactError").textContent = "Phone number is incomplete";

//     isValid = false;
//   }
//   else if (isNaN(contact)) {
//     document.getElementById('contactError').textContent = "Only number is required.";
    
//     isValid = false;
//   }



//   if(email === ''){
//     document.getElementById("emailError").textContent = 'Email is required';

//     isValid = false;
//   }
//   else if(!email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)){
//     document.getElementById("emailError").textContent = 'Email is Incorrect';

//     isValid = false;
//   }


//   if (movie === '') {
//     document.getElementById("movieError").textContent = 'Kindly Select a movie';
//     isValid = false;
//   }


//   if (seat === '') {
//     document.getElementById("seatError").textContent = 'Kindly Select a seat';
//     isValid = false;
//   }

//   if (dateSelect === '') {
//     document.getElementById("date-selectError").textContent = 'Kindly Select movie Date';
//     isValid = false;
//   }

//   if (time === '') {
//     document.getElementById("timeError").textContent = 'Kindly Select a movie time';
//     isValid = false;
//   }

//   if (ticketType === '') {
//     document.getElementById("ticketTypeError").textContent = 'Kindly Select the ticket type';
//     isValid = false;
//   }

//   if (numTickets === '') {
//     document.getElementById("numTicketsError").textContent = 'Kindly enter the number of ticket to purchase';
//     isValid = false;
//   }

//   else if (numTickets === 0) {
//     document.getElementById("numTicketsError").textContent = 'Tickect must be at least 1';
//     isValid = false;
//   }

//   else if (numTickets > 10) {
//     document.getElementById("numTicketsError").textContent = 'Tickect is not available';
//     isValid = false;
//   }else{
//     sectionSIX.style.display = "none";
//     centerResult.style.display = "flex";

//     return;
//   }

  
  
 
//   };
