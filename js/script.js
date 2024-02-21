// function handleSeatClick(seatId) {
//     // Get the seat element by its ID
//     let seat = document.getElementById(seatId);
    
//     // Reduce the number of seats left
//     let seatsLeftElement = document.getElementById('seat-50'); // Assuming 'seat-40' is the ID of the element displaying the number of seats left
//     let seatsLeft = parseInt(seatsLeftElement.innerText);
//     seatsLeft--;
//     seatsLeftElement.innerText = seatsLeft + " Seats left";

//     // Change the background color of the clicked seat to green
//     seat.style.backgroundColor = '#00FF00'; // Green color
    
//     // Remove the click event listener to prevent further clicks
//     seat.removeEventListener('click', handleClick);


//  }

//   // Function to handle click event
//   function handleClick(event) {
//     // Get the ID of the clicked seat
//     let seatId = event.target.id;

//     // Call the function to handle the seat click
//     handleSeatClick(seatId);
//   }

//   // Add click event listener to all seat elements using for...of loop
//   let seats = document.querySelectorAll('#ticket li');
//   for (let seat of seats) {
//     seat.addEventListener('click', handleClick);
//   }



            // MY OWN FUNCTION

// function seatClick(seatIdName){
//   let seat = document.getElementById(seatIdName);
//   seat.style.backgroundColor = '#00FF00'

// }



// let seats = document.querySelectorAll('#ticket li');
// let count = 40;
//   for (let seat of seats) {
//     seat.addEventListener('click',function(){

//       count =count - 1 ;
//       document.getElementById('seat-40').innerText = count ;
//       seat.style.backgroundColor = '#00FF00'
      
      
  


//     });
//   }



















let seats = document.querySelectorAll('#ticket li');
let totalPrice = 0;
let count = 40;
for (let seat of seats) {
    seat.addEventListener('click', function() {
  
      count =count - 1 ;
      document.getElementById('seat-40').innerText = count ;
      seat.style.backgroundColor = '#00FF00'


      

        totalPrice += 550; 
       
        let seatList = document.getElementById('selected-seat');
        let seatListItem = document.createElement('p');
        seatListItem.innerText = seat.id;
        seatList.appendChild(seatListItem);

        
        let priceList = document.getElementById('selected-price');
        let priceListItem = document.createElement('p');
        priceListItem.innerText ='550 Taka';
        priceList.appendChild(priceListItem);
    });
}



function success(){
  hideElementById('main-section')
  hideElementById('footer-section')
  hideElementById('nav-section')
  showElementById('new-section')
}

function hideElementById (elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden')
}
function showElementById (elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden')
}





