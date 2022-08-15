const botonLogin = document.querySelector("#botonLogin")
const verTodo = document.querySelectorAll(".catalogo__direccionarProductos")
const boton_agregarProducto = document.querySelector("#catalogo__boton_agregarProducto")
const boton__acreditarLogin = document.querySelector("#boton__acreditarLogin")
const descripcionProducto = document.querySelectorAll(".catalogo__producto")
const indexLogo = document.querySelector(".header__logo")

if (botonLogin) {
    botonLogin.addEventListener("click", (event)=>{
        event.preventDefault();
        let direcionarLogin = document.location='src/login/login.html';
        document.querySelector("#botonLogin") = direcionarLogin;
    })
}

verTodo.forEach(element => { element.addEventListener("click", (event)=>{
    event.preventDefault();
        let direccionarProductos = document.location='src/productos/productos.html';
        document.querySelectorAll(".catalogo__direccionarProductos") = direccionarProductos;
})});

descripcionProducto.forEach(element => { element.addEventListener("click", (event)=>{
    event.preventDefault();
        if (element.baseURI.includes("index")) {
            let direccionarDescripcionProducto = document.location='src/descripcion_producto/descripcion_producto.html';
            document.querySelectorAll(".catalogo__producto") = direccionarDescripcionProducto;
        } else {
            let direccionarDescripcionProducto = document.location='../descripcion_producto/descripcion_producto.html';
            document.querySelectorAll(".catalogo__producto") = direccionarDescripcionProducto;
        }
        
})});

if (boton_agregarProducto) {
    boton_agregarProducto.addEventListener("click", (event)=>{
        event.preventDefault();
        let direcionarAgregarProducto = document.location='../agregar_productos/agregar_productos.html';
        document.querySelector("#catalogo__boton_agregarProducto") = direcionarAgregarProducto;
    })
}

if (boton__acreditarLogin) {
    boton__acreditarLogin.addEventListener("click", (event)=>{
        event.preventDefault();
        let direcionarIndexLogeado = document.location='../../index.html';
        document.querySelector("#boton__acreditarLogin") = direcionarIndexLogeado;
    })
}

indexLogo.addEventListener("click", (event)=>{
    event.preventDefault();

    if (indexLogo.baseURI.includes(("index"))) {
        let direcionarIndex = document.location='index.html';
        document.querySelector(".header__logo") = direcionarIndex;
    } else {
        let direcionarIndex = document.location='../../index.html';
        document.querySelector(".header__logo") = direcionarIndex;
    }
})