const containerdom = document.getElementById("container-dom")
const formulario = document.querySelector("form");
const username = document.getElementById("username");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const containervalid = document.getElementById("container-validaciones");
const validaciones = document.getElementById("validaciones")


class Usuario{
	constructor(nombre, correo, contraseña){
		this.nombre=nombre,
		this.correo=correo,
		this.contraseña=contraseña
	}
}

const handleSubmit = (e) => {
	e.preventDefault();
	const error = [];
	errores = false

	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	while (validaciones.firstChild) {
		validaciones.removeChild(validaciones.firstChild)
	}
	if (username.value.length < 1) {
		error.push('El nombre de usuario debe tener más de un caracter');
		errores = true;
	}
	if (!regexEmail.test(mail.value)) {
		error.push("Ingrese un correo electronico valido. (email@example.com)");
		errores = true;
	}
	if (password.value.length < 5) {
		error.push("La contraseña debe tener más de 5 caracteres");
		errores = true;
	}
	if (repassword.value !== password.value) {
		error.push("Repita exactamente la misma contraseña");
		errores = true;
	}
	if (errores = true) {

		for (i = 0; i < error.length; i++) {
			const validacion = document.createElement("li");
			const alerta = document.createElement("p")
			const textAlerta = document.createTextNode(error[i])
			alerta.appendChild(textAlerta)
			validacion.appendChild(alerta)
			validaciones.appendChild(validacion)
		};

	}
	if (error.length === 0) {
		
		const user = new Usuario(username.value,mail.value,password.value)
		localStorage.setItem('user', JSON.stringify(user));

		const registroExitoso = document.createElement("div");
		registroExitoso.setAttribute("class","registro-exitoso");

		const checkedLogo = document.createElement("i")
		checkedLogo.setAttribute("class","fa-solid fa-check check-logo")

		const registrado = document.createElement("h3")
		const textRegistrado = document.createTextNode("Registro completado con exito") 

		const acceder = document.createElement("a");
		acceder.setAttribute("href","../home/home.html")
		const textAcceder = document.createTextNode("Clickea aca para pasar;)");


		registrado.appendChild(textRegistrado)
		acceder.appendChild(textAcceder)
		
		registroExitoso.appendChild(checkedLogo)
		registroExitoso.appendChild(registrado)
		registroExitoso.appendChild(acceder)
		
		containerdom.appendChild(registroExitoso)
		console.log(user)
	}

}

//formulario.addEventListener("change", validarForm)
formulario.addEventListener("submit", handleSubmit)


//    const usuario = [...e.target.elements]
//    .filter((element)=>element.type!=="submit")
//    .reduce((acc, element)=>{
//        acc[element.getAttribute("id")]=element.value;
//        return acc;
//        },{});
//        console.log(usuario);
//}