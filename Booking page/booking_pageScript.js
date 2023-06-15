//get the button element
const js_nextBtn = document.getElementById('bkn-page-search-btn');
js_nextBtn.addEventListener('click', handleNextBtn);//put event listener

//get iput elements
const js_input_1 = document.getElementById('inpt-frm');
const js_input_2 = document.getElementById('inpt-to');
const js_input_3 = document.getElementById('inpt-date');

// const js_input_1_1 = js_input_1.value;
// const js_input_3_3 = js_input_3.value;
// const js_input_2_2 = js_input_2.value;

  
function handleNextBtn() {
    if (js_input_1.value && js_input_2.value && js_input_3.value) {
      const updatedElements = document.getElementsByClassName('bkn-level-dspl-item');
      for (let i = 0; i < updatedElements.length; i++) {
        updatedElements[i].classList.add('updatedList');
      }
    } else {
      alert('Please fill in the inputs');
    }
  }
  
  /*

 function handleNextBtn() {
     if (js_input_1.value && js_input_2.value && js_input_3.value) {
         const updatedElements = document.getElementsByClassName('bkn-level-dspl-item');
         for (let i = 0; i < updatedElements.length; i++) {
            updatedElements[i].classList.replace('bkn-level-dspl-item', 'updatedList');
         }
     } else {
         alert('Please fill in the inputs');
     }
 }
*/
