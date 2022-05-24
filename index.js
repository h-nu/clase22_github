const username= document.getElementById("user");
const password= docuemnt.getElementById("password");
const btn = document.getElementById("userAccess");

const validarCampos= (user, pass)=>{
    user.setCustomValidity("");
    pass.setCustomValidity("");

    if (user.value ==""){
        user.setCustomValidity("El campo de user no puede estar vacío");
        }else if (pass.value==""){
            pass.setCustomValidity("El campo de contraseña no puede estar vacío");
        } else if(user.value.indexOf("@")==-1){
            user.setCustomValidity("El campo de user debe contener al menos un @");
        } else{
            user.setCustomValidity("");
            pass.setCustomValidity("");
            console.log("El mensaje ha sido enviado");
        }
}
btn.addEventListener("click",(e)=> {
    validarCampos(username,password);
})