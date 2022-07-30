const carritoToggle = document.getElementById("open-carrito");
const carrito = document.getElementById("carrito-section");
const serviciosItems = document.getElementById("servicios-items");
const comprasContainer = document.getElementById("compras-container");
let carritodata = [];
const vaciarCarrito = document.getElementById("vaciar-carrito");
const total = document.getElementById("total");
const finalizarCompra = document.getElementById("finalizar-compra")

carritoToggle.addEventListener('change', function () {
  carrito.style.display = this.checked ? "initial" : "none";
});




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
      console.log(acum)
      const servicioCart = document.createElement("div")
      servicioCart.setAttribute("class", "producto-cart")
      const servicioNombre = document.createElement("span")
      const textservicioNombre = document.createTextNode(`${itemcarrito.nombre}`)
      servicioNombre.appendChild(textservicioNombre)
      const servicioPrecio = document.createElement("p")
      const textservicioPrecio = document.createTextNode(`${itemcarrito.precio}`)
      servicioPrecio.appendChild(textservicioPrecio)



      servicioCart.appendChild(servicioNombre)
      servicioCart.appendChild(servicioPrecio)

      comprasContainer.appendChild(servicioCart)


    })
    while (total.firstChild) {
      total.removeChild(total.firstChild)
    }
    const textTotal = document.createTextNode(`${acum}`)
    total.appendChild(textTotal)

    vaciarCarrito.addEventListener("click", (e) => {
      comprasContainer.removeChild(comprasContainer.firstChild)
      while (total.firstChild) {
        total.removeChild(total.firstChild)
      }
      const textTotal = document.createTextNode(`0`)
      total.appendChild(textTotal)
    })

    finalizarCompra.addEventListener("click", (e) => {
      acum = 0;
      
        carritodata=[];
        
        comprasContainer.removeChild(comprasContainer.firstChild)
      while (total.firstChild) {
        total.removeChild(total.firstChild)
      }
      const textTotal = document.createTextNode(`0`)
      total.appendChild(textTotal)

      



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