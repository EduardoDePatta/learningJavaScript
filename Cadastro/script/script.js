const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === ''){
        setErrorFor(username, "O Nome de Usuário é obrigatório");
    } else {
        setSuccessFor(username);
    }
     
    if (emailValue === ''){
        setErrorFor(email, "Campo de email obrigatório.");
    }else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.")

    }else {
        setSuccessFor(email);    
    }
    if (passwordValue === ''){
        setErrorFor(password, "Campo de senha obrigatório");
    }else if (passwordValue.length < 8){
        setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        setSuccessFor(password)
    }
    if (passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
    } else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "As senhas não conferem");
    } else{
        setSuccessFor(passwordConfirmation);
    }        
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //adicionar mensagem erro
    small.innerText = message;
    //adicionar a classe de erro
    formControl.className = "form-control error";
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    //adicionar classe de sucesso
    formControl.className = "form-control success"; 
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}