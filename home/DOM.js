const carritoToggle = document.getElementById("open-carrito");
const usuario = JSON.parse(localStorage.getItem("user"));
const carritoTitulo = document.getElementById("carrito-name");
const carritoTituloText = document.createTextNode(`Carrito de ${usuario.nombre}`);
carritoTitulo.appendChild(carritoTituloText);
const carrito = document.getElementById("carrito-section");
const serviciosContent = document.getElementById("servicios-content")
const serviciosItems = document.getElementById("servicios-items");
const serviciosBuscados = document.getElementById("servicios-buscados")
const comprasContainer = document.getElementById("compras-container");
let carritodata = [];
const vaciarCarrito = document.getElementById("vaciar-carrito");
const total = document.getElementById("total");
const finalizarCompra = document.getElementById("finalizar-compra");
const barraBusqueda = document.getElementById("barra-busquedas");
const buscador = document.getElementById("buscador");
const buscar = document.getElementById("buscar")

carritoToggle.addEventListener('change', function () {
  carrito.style.display = this.checked ? "initial" : "none";
});



const limpiarCarrito = () => {
  acum = 0;

  carritodata = [];

  comprasContainer.removeChild(comprasContainer.firstChild)
  while (total.firstChild) {
    total.removeChild(total.firstChild)
  }
  const textTotal = document.createTextNode(`0`)
  total.appendChild(textTotal);
}



const renderizarServicios = servicios.forEach((servicio) => {


  const item = document.createElement("div");
  item.setAttribute("class", "servicio-item")

  const icono = document.createElement("i")
  icono.setAttribute("class", servicio.logo)

  const name = document.createElement("b")
  const textname = document.createTextNode(servicio.nombre)
  name.appendChild(textname);

  const description = document.createElement("p")
  const textDescription = document.createTextNode(servicio.description)
  description.appendChild(textDescription)

  const price = document.createElement("span")
  const textprice = document.createTextNode(`$ ${servicio.precio}`)
  price.appendChild(textprice)

  const agregar = document.createElement("input")
  agregar.setAttribute("type", "button")
  agregar.setAttribute("value", "Agregar al carrito")
  agregar.addEventListener("click", (e) => {
    const elemento = {
      nombre: servicio.nombre,
      precio: servicio.precio,
      id: servicio.ID
    }
    let acum = 0

    carritodata.push(elemento)
    while (comprasContainer.firstChild) {
      comprasContainer.removeChild(comprasContainer.firstChild)
    }


    carritodata.forEach((itemcarrito, i) => {
      acum += Number(itemcarrito.precio);
      const servicioCart = document.createElement("div")
      servicioCart.setAttribute("class", "producto-cart")
      const servicioNombre = document.createElement("span")
      const textservicioNombre = document.createTextNode(`${itemcarrito.nombre}`)
      servicioNombre.appendChild(textservicioNombre)
      const servicioPrecio = document.createElement("p")
      const textservicioPrecio = document.createTextNode(`$${itemcarrito.precio}`)
      servicioPrecio.appendChild(textservicioPrecio)



      servicioCart.appendChild(servicioNombre)
      servicioCart.appendChild(servicioPrecio)

      comprasContainer.appendChild(servicioCart)


    })
    while (total.firstChild) {
      total.removeChild(total.firstChild)
    }
    const textTotal = document.createTextNode(`Total: $${acum}`)
    total.appendChild(textTotal)

    vaciarCarrito.addEventListener("click", (e) => {
      limpiarCarrito();
    })

    finalizarCompra.addEventListener("click", (e) => {
      limpiarCarrito();
      
    })
  })






  item.appendChild(icono)
  item.appendChild(name)
  item.appendChild(description)
  item.appendChild(price)
  item.appendChild(agregar)

  serviciosItems.appendChild(item)


})


document.addEventListener("DOMContentLoaded", (e) => {

  renderizarServicios

})

buscar.addEventListener("click", function (e) {
  e.preventDefault();

  servicios.find(function (servicio) {

    if (buscador.value === servicio.nombre.toLowerCase() || buscador.value === servicio.nombre) {
      barraBusqueda.removeChild(buscar)
      barraBusqueda.removeChild(buscador)
      serviciosContent.removeChild(serviciosItems);

      const volver = document.createElement("button")
      const textvolver = document.createTextNode("Ver todos los servicios")
      volver.appendChild(textvolver)
      barraBusqueda.appendChild(volver)
      volver.addEventListener("click", function (e) {
        e.preventDefault();
        location.reload();
      })

      const item = document.createElement("div");
      item.setAttribute("class", "servicio-item")

      const icono = document.createElement("i")
      icono.setAttribute("class", servicio.logo)

      const name = document.createElement("b")
      const textname = document.createTextNode(servicio.nombre)
      name.appendChild(textname);

      const description = document.createElement("p")
      const textDescription = document.createTextNode(servicio.description)
      description.appendChild(textDescription)

      const price = document.createElement("span")
      const textprice = document.createTextNode(`$ ${servicio.precio}`)
      price.appendChild(textprice)

      const agregar = document.createElement("input")
      agregar.setAttribute("type", "button")
      agregar.setAttribute("value", "Agregar al carrito")
      agregar.addEventListener("click", (e) => {
        const elemento = {
          nombre: servicio.nombre,
          precio: servicio.precio,
          id: servicio.ID
        }
        let acum = 0

        carritodata.push(elemento)
        while (comprasContainer.firstChild) {
          comprasContainer.removeChild(comprasContainer.firstChild)
        }


        carritodata.forEach((itemcarrito, i) => {
          acum += Number(itemcarrito.precio);
          const servicioCart = document.createElement("div")
          servicioCart.setAttribute("class", "producto-cart")
          const servicioNombre = document.createElement("span")
          const textservicioNombre = document.createTextNode(`${itemcarrito.nombre}`)
          servicioNombre.appendChild(textservicioNombre)
          const servicioPrecio = document.createElement("p")
          const textservicioPrecio = document.createTextNode(`$${itemcarrito.precio}`)
          servicioPrecio.appendChild(textservicioPrecio)



          servicioCart.appendChild(servicioNombre)
          servicioCart.appendChild(servicioPrecio)

          comprasContainer.appendChild(servicioCart)


        })
        while (total.firstChild) {
          total.removeChild(total.firstChild)
        }
        const textTotal = document.createTextNode(`Total: $${acum}`)
        total.appendChild(textTotal)

        vaciarCarrito.addEventListener("click", (e) => {
          limpiarCarrito();
        })

        finalizarCompra.addEventListener("click", (e) => {
          window.alert(`Gracias por su compra de $${acum}`)
          limpiarCarrito();
        })
      })






      item.appendChild(icono)
      item.appendChild(name)
      item.appendChild(description)
      item.appendChild(price)
      item.appendChild(agregar)

      serviciosBuscados.appendChild(item)

    }
    

  })

})