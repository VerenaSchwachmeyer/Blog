

function changeButton(){
    const element = document.getElementById('newsletter-button');

    element.innerHTML="Alles klar!";
    element.style.backgroundColor='lightgrey';
    element.style.color='grey';
    element.setAttribute("disabled", true);

    document.getElementById('email').setAttribute("disabled", true);

}