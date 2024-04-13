// console.log('connected')
function remainSeat(){
    let previous_set_number=document.getElementById('seat-number');
   let new_seat=parseInt(previous_set_number.innerHTML);
   let updateSeat=new_seat-1;
   previous_set_number.innerHTML=updateSeat;
 }

 function selected_Seat(){
    let selected= document.getElementById('selected-seat');
    let text_selected=parseInt(selected.innerHTML);
    let update_selected = text_selected+1;
    selected.innerHTML=update_selected;
 }


 function ticket_container( container){
    
    var ticket=document.getElementById('ticket-container');
    let contain= container;
    console.log(contain);
    ticket.innerHTML += `<h1>${contain}</h1><h1>Economy</h1><h1>550</h1>`;
}

function total_money(){
    
    let total= document.getElementById('total');
    let total_new=parseInt(total.innerHTML);
    let update_price = total_new+550;
    total.innerHTML=update_price;
}

function grandtotal(percentage){
    let total= document.getElementById('total');
    let total_new=parseInt(total.innerHTML);
    let grand= document.getElementById('grand-total');
    let update_total= parseInt(grand.innerHTML);
    update_total= total_new*percentage;
    grand.innerHTML=update_total;
}



