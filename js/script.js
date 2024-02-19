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



let seats = document.querySelectorAll('#ticket li');
  for (let seat of seats) {
    seat.addEventListener('click',function(){

      count =count - 1 ;
      document.getElementById('seat-50').innerText = count ;
      seat.style.backgroundColor = '#00FF00'
      

      





    });
  }

let count = 50;