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
            img: "https://images.unsplash.com/photo-1707009504668-dc68cf06765c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        {
            title: "Mezquita-Catedral de Córdoba",
            desc: "un fascinante monumento declarado Patrimonio de la Humanidad que combina la arquitectura califal islámica, famosa por su icónico bosque de columnas y arcos bicolores de mármol y ladrillo, con una imponente catedral renacentista erigida en su interior.",
            img: "https://lh3.googleusercontent.com/gpms-cs-s/AM4Q-U8x7fIlQFqXeHK3DhY0_6MI48-w9Ezzlcj39kGqJBG62HRYLPzIq7AwJHqGHS45RA68ZtmRrSoAQE5lNy9ulaJh_hSdZDRxK3m4Eu4cfrJp8zFh-V3Wm2YgFuymU3yQnInSdoRliA=s1360-w1360-h1020"
        }
    ];
} else if (currentPath.includes("Brasil")) {
    destinations = [
        {
            title: "Cristo Redentor",
            desc: "Imponente estatua de Jesucristo en Río de Janeiro, una de las nuevas maravillas...",
            img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Pan de Azúcar de Río de Janeiro",
            desc: "es un icónico morro de granito que se eleva a casi 400 metros sobre la bahía de Guanabara, al cual se accede mediante un clásico teleférico (bondinho) para disfrutar de unas vistas panorámicas inolvidables de las playas y la ciudad.",
            img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg/1920px-P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            title: "Parque Nacional de los Lençóis Maranhenses",
            desc: "es un paisaje desértico único en el mundo, donde vastas dunas de arena blanca y fina contrastan con miles de lagunas de agua dulce cristalina que se forman tras las lluvias, creando un impresionante oasis tropical.",
            img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Lencois_Maranhenses_8.jpg/1920px-Lencois_Maranhenses_8.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        }

    ];
} else if (currentPath.includes("Italia")) {
    destinations = [
        {
            title: "El Coliseo Romano",
            desc: "Anfiteatro flavio ubicado en el centro de Roma, símbolo del Imperio Romano...",
            img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Torre de Pisa",
            desc: "es el icónico campanario inclinado de la catedral de la ciudad toscana, mundialmente famoso tanto por su característico y fotogénico desvío vertical como por la belleza de su arquitectura de mármol blanco en el conjunto monumental de la Plaza del Duomo.",
            img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Exterior_of_the_Leaning_Tower_%28Pisa%29_in_April_2024.jpg/500px-Exterior_of_the_Leaning_Tower_%28Pisa%29_in_April_2024.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
        },
        {
            title: "Canales de Venecia",
            desc: "son una red laberíntica de vías fluviales que serpentean entre históricos palacios renacentistas y góticos, recorridos tradicionalmente por góndolas que ofrecen una estampa romántica y única de esta ciudad flotante sobre la laguna del mar Adriático.",
            img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg/1920px-Panorama_of_Canal_Grande_and_Ponte_di_Rialto%2C_Venice_-_September_2017.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
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