const iTarea = document.getElementById("tarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");

let listaTareas = [];
let tareasPendientes = [];

function agregarTarea(){
    const texto = iTarea.value.trim()

    if (texto === '') return;
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = texto;
    listaTareas.push(texto)
    
    lista.appendChild(nuevaTarea);
    iTarea.value = '';
    iTarea.focus();
    console.log("Array de tareas actual:", listaTareas);
}

boton.addEventListener('click', agregarTarea);

console.log("Array de tareas afueras:", listaTareas);