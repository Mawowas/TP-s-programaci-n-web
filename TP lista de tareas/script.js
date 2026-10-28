

// Tareas
const iTarea = document.getElementById("tarea");
const iCompletada = document.getElementById("completada");

// Botones
const boton = document.getElementById("agregar");
const btnPendiente = document.getElementById("agregar-completada");

// Lista
const lista = document.getElementById("lista");

// Array principal de tareas (guardaremos objetos para tener el texto y el estado)
let tareas = [];

// Función para renderizar la lista en el DOM
function actualizarVista() {
    lista.innerHTML = ""; 

    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        
        // Creamos el elemento de imagen
        const icono = document.createElement('img');

        // Evaluamos el estado para asignar la imagen y la clase CSS (¡sin .style aquí!)
        if (tarea.completada) {
            li.classList.add('completada');
            icono.src = 'imagenes/comprobado.png';
            icono.alt = 'Completada';
        } else {
            li.classList.add('pendiente');
            icono.src = 'imagenes/advertencia.png';
            icono.alt = 'Pendiente';
        }

        // Creamos el texto y armamos el elemento
        const textoSpan = document.createElement('span');
        textoSpan.textContent = tarea.texto;

        li.appendChild(icono);
        li.appendChild(textoSpan);
        lista.appendChild(li);
    });
}

// 1. Agregar nueva tarea (Por defecto nace como pendiente)
function agregarTarea() {
    const texto = iTarea.value.trim();
    if (texto === '') return;

    tareas.push({ texto: texto, completada: false });
    
    iTarea.value = '';
    iTarea.focus();
    
    actualizarVista();
    console.log("Array de tareas actual:", tareas);
}

// 2. Marcar tarea como completada desde el segundo input
function marcarComoCompletada() {
    const textoBuscado = iCompletada.value.trim().toLowerCase();
    if (textoBuscado === '') return;

    // Buscamos si existe una tarea pendiente con ese texto
    const tareaEncontrada = tareas.find(t => t.texto.toLowerCase() === textoBuscado && !t.completada);

    if (tareaEncontrada) {
        tareaEncontrada.completada = true;
        iCompletada.value = '';
        actualizarVista();
        console.log("Tarea marcada como completada:", tareaEncontrada.texto);
    } else {
        alert("No se encontró una tarea pendiente con ese nombre.");
    }
    
    iCompletada.focus();
}

// Event Listeners
boton.addEventListener('click', agregarTarea);
btnPendiente.addEventListener('click', marcarComoCompletada);

// Opcional: Permitir presionar "Enter" en los inputs
iTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});

iCompletada.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') marcarComoCompletada();
});