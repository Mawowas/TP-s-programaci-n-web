const btnTheme = document.getElementById('boton');
const boton = document.getElementById("boton");

// 1. Al cargar la página, verificar si el usuario ya tenía guardado el tema oscuro
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
document.body.classList.add('dark-mode');
btnTheme.textContent = '☀️';
}

// 2. Escuchar el clic en el botón
btnTheme.addEventListener('click', () => {

  // esto es animacion
boton.classList.toggle("activo");

  // Alterna la clase 'dark-mode' en el <body>
document.body.classList.toggle('dark-mode');

  // Verificar si quedó activo el modo oscuro
const isDark = document.body.classList.contains('dark-mode');

  // Actualizar el texto del botón y guardar en localStorage
if (isDark) {
    btnTheme.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
} else {
    btnTheme.textContent = '🌙';
    localStorage.setItem('theme', 'light');
}
});

