let textArea = document.querySelector('#sumaNumeros');
const botonAgregar = document.querySelector('#btnAgregar');
const input = document.querySelector('#txtNumero');
const btnSumar = document.querySelector('#btnSumar');
const resultado = document.querySelector('#resultado');

botonAgregar.addEventListener('click', function(event) {
    event.preventDefault();
    textArea.innerHTML += input.value + '\n' ;
    input.value = '';
});

btnSumar.addEventListener('click', (event) => {
    event.preventDefault();
    
    //generando array a partir de separar los elementos,
    //mediente un separador que es el salto de linea
    const arrayElementos = textArea.value.split('\n');

    /**
     * al agregar elementos al textarea, el ulitmo elemento 
     * generado es uno vacio, siendo este un valor no numerico,
     * este valor se genero cuando agregamos el ultimo elemento, por el hecho de haber
     * puesto un salto de linea justo depues del valor del input,
     * y esa es la razon de eliminar esa ultima posicion
     */
    arrayElementos.pop();
    
    let suma = 0;
    const arrayEnteros =  arrayElementos.map( value => parseInt(value) );
    
    arrayEnteros.map( value => suma += value );

    resultado.innerHTML = suma;

}); 



