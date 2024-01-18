let USADAS = []
    let CATEGORIAS = ["Nombres de hombre",
        "Nombres de mujer",
        "Ciudades de Europa",
        "Ciudades de América",
        "Animales",
        "Frutas y verduras",
        "Países del mundo",
        "Marcas de coches",
        "Instrumentos musicales",
        "Deportes",
        "Cantantes famosos",
        "Películas",
        "Libros",
        "Personajes de ficción",
        "Juegos de mesa",
        "Elementos químicos",
        "Herramientas",
        "Idiomas",
        "Canciones",
        "Platos típicos",
        "Profesiones",
        "Deportistas famosos",
        "Ríos importantes",
        "Montañas del mundo",
        "Capitales de país",
        "Videojuegos",
        "Juguetes",
        "Marcas de moda",
        "Instrumentos de laboratorio",
        "Plantas"];

let yaJugadas=document.getElementById("yaJugadas")
let porJugar = document.getElementById("porJugar")
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')


    
  
    let bandera = true;
    let rollear = document.getElementById("rollear");
    let categoriaNueva = document.getElementById("categoriaPersonalizada");
    let agregarCategoria = document.getElementById("agregarCategoria");
    let categoriaAJugar = document.getElementById("categoriaAJugar");
    let reiniciar = document.getElementById("reinciar");
    let segundos = 60
    let timer = document.getElementById("timer");
    let vaciar = document.getElementById("vaciar");
    
    function agregarCategoriaAArray(elemento, array) {
        if (categoriaNueva.value == "") {
            Swal.fire({
                title: "Categoría no valida",
                text: "El campo no puede estar vacío",
            })

        } else {
            array.push(elemento);
            console.log(array)
            return array;

    }


    }

    // Envuelve la llamada a agregarCategoriaAArray en una función anónima
    agregarCategoria.addEventListener('click', function () {
        agregarCategoriaAArray(categoriaNueva.value, CATEGORIAS);
        categoriaNueva.value = "";
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function rollearCategoria() {
        if (CATEGORIAS.length == 0) {
            categoriaAJugar.innerText = "No quedan categorías para jugar. Clic en el botón verde para reiniciar."
            CATEGORIAS = ["Nombres de hombre",
        "Nombres de mujer",
        "Ciudades de Europa",
        "Ciudades de América",
        "Animales",
        "Frutas y verduras",
        "Países del mundo",
        "Marcas de coches",
        "Instrumentos musicales",
        "Deportes",
        "Cantantes famosos",
        "Películas",
        "Libros",
        "Personajes de ficción",
        "Juegos de mesa",
        "Elementos químicos",
        "Herramientas",
        "Idiomas",
        "Canciones",
        "Platos típicos",
        "Profesiones",
        "Deportistas famosos",
        "Capitales de país",
        "Videojuegos",
        "Juguetes",
        "Marcas de ropa",
        "Sabores de empanadas","Sabores de helado", "Bandas", "Mares/oceanos/ríos"];
        USADAS = []
        } else {

            let posicion = getRandomInt(CATEGORIAS.length)
            console.log(posicion)
            let proximo = CATEGORIAS.splice(posicion, 1)
            console.log(proximo)
            USADAS.push(proximo)
            categoriaAJugar.innerText = proximo
            return proximo
        }

    }
    rollear.addEventListener("click", function () {
        categoriaAJugar.value = rollearCategoria()
        bandera = true
        end = Date.now() + 60 * 1000
    })


    reiniciar.addEventListener("click", function () {
        categoriaAJugar.innerText = "Click en el boton verde para empezar"
        USADAS =[]
        CATEGORIAS = ["Nombres de hombre",
        "Nombres de mujer",
        "Ciudades de Europa",
        "Ciudades de América",
        "Animales",
        "Frutas y verduras",
        "Países del mundo",
        "Marcas de coches",
        "Instrumentos musicales",
        "Deportes",
        "Cantantes famosos",
        "Películas",
        "Libros",
        "Personajes de ficción",
        "Juegos de mesa",
        "Elementos químicos",
        "Herramientas",
        "Idiomas",
        "Canciones",
        "Platos típicos",
        "Profesiones",
        "Deportistas famosos",
        "Capitales de país",
        "Videojuegos",
        "Juguetes",
        "Marcas de ropa",
        "Sabores de empanadas","Sabores de helado", "Bandas", "Mares/oceanos/ríos"];
    })


    myInput.addEventListener("click",function(){
    porJugar.innerHTML=`<h3>Restantes:</h3> ${CATEGORIAS}`
    yaJugadas.innerHTML=`<h3>Ya jugadas:</h3> ${USADAS}`
})

