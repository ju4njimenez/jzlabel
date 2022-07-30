const containerdom = document.getElementById("container-dom")
const formulario = document.querySelector("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const ingresar = document.getElementById("ingresar")
const containervalid = document.getElementById("container-validaciones");
const validaciones = document.getElementById("validaciones")



const handleSubmit =(e) =>{
    e.preventDefault();
	const error = [];
	errores = false;

    const usuario = JSON.parse(localStorage.getItem("user"))

	
	while (validaciones.firstChild) {
		validaciones.removeChild(validaciones.firstChild)
	}

    if (username.value !== usuario.nombre) {
		error.push('No se encontraron usuarios con ese nombre');
		errores = true;
	}
	
	if (password.value !== usuario.contraseña) {
		error.push("Contraseña incorrecta");
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
		
		

		const sesionIniciada = document.createElement("div");
		sesionIniciada.setAttribute("class","sesion-iniciada");

		const checkedLogo = document.createElement("i")
		checkedLogo.setAttribute("class","fa-solid fa-check check-logo")

		const bienvenida = document.createElement("h3")
		const textBienvenida = document.createTextNode(`Bienvenido ${usuario.nombre}!`) 

		const acceder = document.createElement("a");
		acceder.setAttribute("href","../home/home.html")
		const textAcceder = document.createTextNode("Clickea aca para pasar;)");


		bienvenida.appendChild(textBienvenida)
		acceder.appendChild(textAcceder)
		
		sesionIniciada.appendChild(checkedLogo)
		sesionIniciada.appendChild(bienvenida)
		sesionIniciada.appendChild(acceder)
		
		containerdom.appendChild(sesionIniciada)
	}
}


formulario.addEventListener("submit", handleSubmit)
  