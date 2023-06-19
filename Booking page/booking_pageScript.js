//get the button element
const js_nextBtn = document.getElementById('bkn-page-search-btn');
js_nextBtn.addEventListener('click', handleNextBtn);//put event listener
//object to store the travelling info
const travelInfo = {};

// Function to display the different classes of travel  
function handleNextBtn() {
  //get iput elements
  const js_input_1 = document.getElementById('inpt-frm');
  const js_input_2 = document.getElementById('inpt-to');
  const js_input_3 = document.getElementById('inpt-date');
  const input_1 = js_input_1.value;
  const input_2 = js_input_2.value;
  const input_3 = js_input_3.value;
  //add travel info to the object
  travelInfo.travellingFrom = input_1;
  travelInfo.travellingTo = input_2;
  travelInfo.dateOfTravel = input_3;
  //check if the input elements are filled
    if (js_input_1.value && js_input_2.value && js_input_3.value) {
      const updatedElements = document.getElementsByClassName('bkn-level-dspl-item');
      for (let i = 0; i < updatedElements.length; i++) {
        updatedElements[i].classList.add('updatedList');
      }
    } else {
      alert('Please fill in the inputs');
    }
  }
  
 /* Display the 3 classes of travel with the amount  */ 
 //function to check which class the customer has selected.
let travelAmount;
const economyClass = document.getElementById('js-economy-class');
const businessClass = document.getElementById('js-business-class');
const vipClass = document.getElementById('js-VIP-class');

economyClass.addEventListener('click', () => {
  selectTravelClass('economy');
});
businessClass.addEventListener('click', () => {
  selectTravelClass('Business');
});
vipClass.addEventListener('click', () => {
  selectTravelClass('VIP');
})

function selectTravelClass(travel_class) {
  if(travel_class === 'economy') {
    travelAmount = 2000;
    displayTravellInfo('economy');
  }
  else if(travel_class === 'Business') {
    travelAmount = 2500;
    displayTravellInfo('Business');
  }
  else if (travel_class === 'VIP') {
    travelAmount = 3000;
    displayTravellInfo('VIP');
  }
function displayTravellInfo(travel_class) {
  const date = travelInfo.dateOfTravel;
  const to = travelInfo.travellingTo;
  const from = travelInfo.travellingFrom;
  if(travel_class === 'economy') {
    economyClass.innerHTML = `<ol>
                                 <li>Date of travel: ${date}</li>
                                 <li>From: ${to}</li>
                                 <li>To: ${from}</li>
                                 <li>Amount: ${travelAmount}</li>
                              </ol>`;
  }
  else if(travel_class === 'Business'){
    businessClass.innerHTML = `<ol>
                                 <li>Date of travel: ${date}</li>
                                 <li>From: ${to}</li>
                                 <li>To: ${from}</li>
                                 <li>Amount: ${travelAmount}</li>
                              </ol>`;
  }
  else if(travel_class === 'VIP') {
    vipClass.innerHTML = `<ol>
                            <li>Date of travel: ${date}</li>
                            <li>From: ${to}</li>
                            <li>To: ${from}</li>
                            <li>Amount: ${travelAmount}</li>
                          </ol>`;
  }
    
  }
}