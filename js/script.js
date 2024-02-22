


let seats = document.querySelectorAll('#ticket li');
let totalPrice = 0;
let count = 40;
let count2 = 0
for (let seat of seats) {
    seat.addEventListener('click', function() {
  
      count =count - 1 ;
      document.getElementById('seat-40').innerText = count ;
      seat.style.backgroundColor = '#00FF00';

      count2 =count2 + 1 ;
      document.getElementById('seat-select').innerText = count2 ;
      
      

      

        totalPrice += 550; 
       
        let seatList = document.getElementById('selected-seat');
        let seatListItem = document.createElement('p');
        seatListItem.innerText = seat.id;
        seatList.appendChild(seatListItem);

        
        let priceList = document.getElementById('selected-price');
        let priceListItem = document.createElement('p');
        priceListItem.innerText ='550';
        
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


function submit(){
  hideElementById('new-section')
  showElementById('main-section')
  showElementById('nav-section')
  showElementById('footer-section')
}
