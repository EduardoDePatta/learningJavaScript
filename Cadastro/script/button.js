var btn = window.document.getElementById("btn");
btn.addEventListener("mousedown", clicar);
btn.addEventListener("mouseup", clicou);

function clicar(){
    btn.style.fontWeight = "700";    
}
function clicou(){
    btn.style.fontWeight = "400";    
}