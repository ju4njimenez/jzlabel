
class Servicio {
	static currentID = 1;

	constructor({nombre,logo,description,precio}) {
		this.ID = Servicio.currentID;
		this.nombre=nombre;
		this.logo=logo;
        this.description = description;
        this.precio = precio

		Servicio.currentID++;
	}
}

const Grabacion = new Servicio({
	nombre:"Grabacion",
    logo:"fas fa-solid fa-microphone icono-servicio",
    description:"Grabación en alta calidad de voces e instrumentos.",
    precio:20,
})

const Produccion = new Servicio({
	nombre:"Produccion",
    logo:"fas fa-solid fa-music icono-servicio",
    description:"Produccion musical, de instrumentales y arreglos.",
    precio:50,
})

const Mezcla = new Servicio({
nombre:"Mezcla",
    logo:"fas fa-solid fa-sliders icono-servicio",
    description:"Mezcla de canciones pista por pista.",
    precio:25,
})

const Master = new Servicio({
	nombre:"Master",
    logo:"fas fa-solid fa-volume-high icono-servicio",
    description:"Masterizacion, dejando lista la cancion para ser distribuida.",
    precio:15,
})

const Escritura = new Servicio({
	nombre:"Escritura",
    logo:"fas fa-solid fa-pencil icono-servicio",
    description:"Escritura y asistencia de composición.",
    precio:20,
})

const servicios = [Grabacion, Produccion, Mezcla, Master, Escritura]

miStorage = window.localStorage;
miStorage.servicios = JSON.stringify(servicios)