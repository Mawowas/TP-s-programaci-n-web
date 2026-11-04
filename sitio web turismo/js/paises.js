let destinations = [];

// 1. Detectar en qué página estamos según la URL o el nombre del archivo
const currentPath = window.location.pathname;

if (currentPath.includes("Argentina")) {
    destinations = [
        {
            title: "Glaciar Perito Moreno",
            desc: "Ubicado en la provincia de Santa Cruz, dentro del Parque Nacional Los Glaciares. Es una imponente masa de hielo en constante movimiento que ofrece un espectáculo natural único en el mundo.",
            img: "https://images.unsplash.com/photo-1736390739681-ab6580f53adc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        {
            title: "Cataratas del Iguazú",
            desc: "Situadas en la provincia de Misiones, son una de las 7 maravillas naturales del mundo. Un impresionante conjunto de cataratas rodeadas de selva subtropical y pasarelas cercanas a la famosa 'Garganta del Diablo'.",
            img: "https://images.unsplash.com/photo-1781041004909-f634f1cbd428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        {
            title: "Quebrada de Humahuaca",
            desc: "En la provincia de Jujuy, este valle andino destaca por sus paisajes desérticos, pueblos históricos de adobe y los fascinantes cerros de colores, como el famoso Cerro de los Siete Colores en Purmamarca.",
            img: "https://www.quebradadehumahuaca.com/img/slide-h.jpg"
        }
    ];
} else if (currentPath.includes("Espana")) {
    destinations = [
        {
            title: "La Sagrada Familia",
            desc: "Famosa basílica católica en Barcelona diseñada por Antoni Gaudí...",
            img: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        {
            title: "La Alhambra de Granada",
            desc: "Palacio y fortaleza andalusí que refleja el esplendor del periodo nazarí...",
            img: "https://images.unsplash.com/photo-1563852072-67253594b5f4?auto=format&fit=crop&w=1000&q=80"
        }
    ];
} else if (currentPath.includes("Brasil")) {
    destinations = [
        {
            title: "Cristo Redentor",
            desc: "Imponente estatua de Jesucristo en Río de Janeiro, una de las nuevas maravillas...",
            img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80"
        }
    ];
} else if (currentPath.includes("Italia")) {
    destinations = [
        {
            title: "El Coliseo Romano",
            desc: "Anfiteatro flavio ubicado en el centro de Roma, símbolo del Imperio Romano...",
            img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80"
        }
    ];
}

// 2. Lógica común del carrusel (no cambia sin importar el país)
let currentIndex = 0;

const imgElement = document.getElementById("carousel-img");
const titleElement = document.getElementById("carousel-title");
const descElement = document.getElementById("carousel-desc");

function updateSlide() {
    if (destinations.length > 0) {
        imgElement.src = destinations[currentIndex].img;
        titleElement.textContent = destinations[currentIndex].title;
        descElement.textContent = destinations[currentIndex].desc;
    }
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = destinations.length - 1;
    } else if (currentIndex >= destinations.length) {
        currentIndex = 0;
    }
    updateSlide();
}

// Cargar el primer elemento al abrir la página
window.onload = updateSlide;