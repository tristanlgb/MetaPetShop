//My Pet Meta Shop Structure

class metaversPets {
    constructor (id,name,img, price, info, available){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.info = info;
        this.available = available;
    }
  }
  
const pets = [];

let dog = new metaversPets (1,'Perro','./img/petshop/dog.jpg', 5, 'pet',1);
pets.push (dog)
let cat = new metaversPets (2, 'Gato','./img/petshop/cat.jpg', 5, 'pet',1);
pets.push (cat)
let pig = new metaversPets (3, 'Cerdo','./img/petshop/pig.jpg', 5, 'pet',1);
pets.push (pig)
let dear = new metaversPets (4, 'Venado','./img/petshop/dear.jpg', 5, 'pet',1);
pets.push (dear)
let dodo = new metaversPets (5, 'Pajaro Dodo','./img/petshop/dodo.jpg', 5, 'pet',1);
pets.push (dodo)
let dolphin = new metaversPets (6, 'Delfin','./img/petshop/dolphin.jpg', 5, 'pet',1);
pets.push (dolphin)
let duck = new metaversPets (7, 'Pato','./img/petshop/duck.jpg', 5, 'pet',1);
pets.push (duck)
let ferret = new metaversPets (8, 'Huron','./img/petshop/ferret.jpg', 5, 'pet',1);
pets.push (ferret)
let fox = new metaversPets (9, 'Zorro','./img/petshop/fox.jpg', 5, 'pet',1);
pets.push (fox)
let bear = new metaversPets (10, 'Oso','./img/petshop/bear.jpg', 5, 'pet',1);
pets.push (bear)
let wildcat = new metaversPets (11, 'Lince','./img/petshop/wildcat.jpg', 5, 'pet',1);
pets.push (wildcat)
let snake = new metaversPets (12, 'Serpiente','./img/petshop/snake.jpg', 5, 'pet',1);
pets.push (snake) 
  
  
const mylistPets = document.getElementById('mylistPets');
  
pets.forEach((pet) => {
    const myPet = document.createElement('div');
    myPet.className = 'tarjetaProducto'
    myPet.innerHTML = `
        <div class='datosTarjeta'>
        <div class="card-body">
        <img src="${pet.img}" class= "imagenesProductos">
        <h3 class="card-title"> ${pet.name} </h3>
        <p class="card-text-precio"> $${pet.price} </p>
        <p class='card-text-descripcion'>${pet.info}</p>
        <button id="boton${pet.id}" class="boton">Añadir➕</button>
        </div>
        </div>`;

    mylistPets.append(myPet);

    const boton = document.getElementById(`boton${pet.id}`);
    boton.addEventListener('click', () => {
      addmyPet(pet.id);
    });
  });
  
  const myCart = [];
  const petsAdded = document.getElementById('petsAdded');
  const countering = document.getElementById ('countering')
  
  const counteringPets = ()=>{
  countering.style.display = 'block'
  countering.innerText = myCart.length
  }
  
  
  const addmyPet = (id) => {
    const pet = pets.find((pet) => pet.id === id);
    const petsinCart = myCart.find((pet) => pet.id === id);
    if (petsinCart) {
      petsinCart.available++;
    } else {
      myCart.push(pet);
    }
    newpetsinCart();
    counteringPets ();
  };
  

function newpetsinCart() {
    let actualizar = '';
    myCart.forEach((pet) => {
        actualizar += `
        <div class="contenido-carrito">
        <h3 class="itemCarritoTitulo"> ${pet.name} </h3>
        <p class="itemCarrito">$${pet.price}</p>
        <p class= "itemCarrito">${pet.available}</p>
        <button onClick = "eliminarDelCarrito(${pet.id})" class="boton">❌</button>
        </div>`;
    });
    
  petsAdded.innerHTML = actualizar;
  calcularTotalCompra();
}

const eliminarDelCarrito = (id) => {
    const pet = myCart.find((pet) => pet.id === id);
    myCart.splice(myCart.indexOf(pet), 1);
    newpetsinCart();
    counteringPets ();
  };
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    myCart.splice(0, myCart.length);
    newpetsinCart();
    counteringPets ();
  });
  
  const totalCompra = document.getElementById('totalCompra');
  const completar = document.getElementById ('completarCompra')
  
  const calcularTotalCompra = () => {
    let total = 0
    myCart.forEach((pet) => {
      total += pet.price * pet.available;
    });
    totalCompra.innerHTML = total;

   if (total !== 0){
      completar.addEventListener ('click', completarForm)
    }
  };

  function completarForm (){
    let datosUsuario = document.createElement ('div')
    datosUsuario.className = 'datos-usuario'
    datosUsuario.innerHTML = `
      <h3 class= 'titulo'>📞 Ingresa tus datos🏚️</h3>
      <input id=nombreUsuario class= 'inputDatos' placeholder=' nombre👨‍👩‍👦'></input>
      <input id=apellidoUsuario class= 'inputDatos' placeholder='apellido👨‍👩‍👦'></input>
      <input id=telefonoUsuario  class= 'inputDatos' placeholder='telefono📞'></input>
      <input id=correoUsuario class= 'inputDatos' placeholder=' correo electronico📧'></input>
      <input id=direccionUsuario class= 'inputDatos' placeholder='direccion🏚️'></input>
      <button id=botonEnviarDatos class='boton'>🟢Enviar🟢</button>
      `
      carritoDeCompras.append (datosUsuario); 
      completar.removeEventListener ('click', completarForm)

      let nombreUsuario = document.getElementById ('nombreUsuario');
      let apellidoUsuario = document.getElementById ('apellidoUsuario');
      let telefonoUsuario = document.getElementById ('telefonoUsuario');
      let correoUsuario = document.getElementById ('correoUsuario');
      let direccionUsuario = document.getElementById ('direccionUsuario');
      let botonEnviar = document.getElementById ('botonEnviarDatos');  

      botonEnviar.addEventListener ('click', function final (){
        const datosIngresados = {
        nombre: nombreUsuario.value,
        apellido: apellidoUsuario.value,
        telefono: telefonoUsuario.value,
        correo: correoUsuario.value,
        direccion: direccionUsuario.value,
       }
      
      localStorage.setItem ('DatosCliente', JSON.stringify (datosIngresados))
      
      if (nombreUsuario.value === '' || apellidoUsuario.value === '' || telefonoUsuario.value === '' || correoUsuario.value === '' || direccionUsuario.value === ''){
        alert ('🐲No ingresaste tu informacion🐲')
      } else {
        let divFinal = document.createElement ('div')
        divFinal.className = 'div-final'
        divFinal.innerHTML = `
        <p class= 'texto'>😃Gracias por tu compra😃 ${JSON.parse(localStorage.getItem("DatosCliente")).nombre}!</p>
        <p class= 'texto'>🐕Tu mascota sera enviada a tu metaverso registrado en🐕 ${JSON.parse(localStorage.getItem("DatosCliente")).direccion}.
        💓Gracias por confiar en PetMetaShop💓.
        </p>
        `
        carritoDeCompras.append (divFinal)
        botonEnviar.removeEventListener("click", final);
      }
    })
  } 

   



  
 


  

    