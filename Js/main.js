// console.log('connected')
// button color 
const inputDiv = document.getElementById("seats");

const inputList = inputDiv.getElementsByTagName('input');
// console.log(inputList);
let selectedSeats = 0;

for (let input of inputList) {
    input.addEventListener("click", function() {
        if (selectedSeats > 3) {
            alert("You can only select a maximum of 4 seats.");
            return; 
          }      
        const elementID = input.value;
        const seat = document.getElementById(elementID);
        seat.classList.add("bg-[#1DD100]");
        seat.classList.add("text-white");
        remainSeat();
        selected_Seat();
        ticket_container(elementID);
        total_money();
        selectedSeats++;
    });
}



document.getElementById("ápply-cupon").addEventListener("click",function(){
    
    let cupon= document.getElementById("cupon-name");
    let value = cupon.value.toUpperCase();
    if(value==="NEW 15"){
        grandtotal(.85);
    }
    else if(value==="COUPLE 20"){
        grandtotal(.80);
    }
    else{
        alert("Please Type same as exactly above name of those cupon!!! Happy Journey ");
    }
});

// Input details
const fnameInput = document.getElementById("fname");
const phoneInput = document.getElementById("phone-number");
const emailInput = document.getElementById("email");
const nextButton = document.getElementById("next-button");


function checkInputs() {
  const fnameValue = fnameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();

  let allFieldsValid = true; 


  if (fnameValue.length > 10) {
    alert("The name may have no more than 10 characters.");
    allFieldsValid = false; 
  } else {
    fnameInput.value = fnameValue.toUpperCase(); 
  }

  
  if (phoneValue.length > 11) {
    alert("Please use a valid Mobile Number (maximum 11 digits).");
    allFieldsValid = false;
  }

  
  if (!emailValue.includes("@")) {
    allFieldsValid = false;
  }

  const allFieldsFilled = fnameValue !== "" && phoneValue !== "" && emailValue !== "";

  nextButton.disabled = !allFieldsFilled || !allFieldsValid; 
}


fnameInput.addEventListener("input", checkInputs);
phoneInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);


checkInputs();


nextButton.addEventListener("click", function() {
    let last = document.getElementById('finish');
    last.classList.remove("hidden");
    let first = document.getElementById('first');
    first.classList.add("hidden");
});











