const nombre = document.getElementById("name");
const email = document.getElementById("email");
const apellido = document.getElementById("lastname");
const form = document.getElementById("contact_form");
const parrafo = document.getElementById("warnings");

form.addEventListener("boton", e=>{

    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; //expresiones regulares para validad mails
    parrafo.innerHTML="";
    if(nombre.value.length <3){
        warnings +='El nombre ingresado no es válido. <br>';
        entrar = true;
    }
    if(apellido.value.length <3){
            warnings +='El apellido ingresado no es válido. <br>';
            entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings +='El mail ingresado no es válido <br>';
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }
        else {
            parrafo.innerHTML = "Enviado."
        }
})
    
