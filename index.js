

function changeButton(){
    //change button after clicking on it
    const element = document.getElementById('newsletter-button');
    element.innerHTML="Alles klar!";
    element.style.backgroundColor='lightgrey';
    element.style.color='grey';
    element.setAttribute("disabled", true);
    
   // change mail input field
    document.getElementById('email').setAttribute("disabled", true);

}