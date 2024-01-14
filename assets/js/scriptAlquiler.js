/* ------ Propiedades Arriendo ------- */
const propiedades_alquiler = [
  {
    id: 1,
    nombre: "Departamento acogedor en las afueras de la ciudad",
    src: "https://www.guzmanylarrain.com/assets/img/proyectos/promos/promo-isidora1.jpg ",
    descripcion:
      "Este departamento consta de 2 habitaciones y está ubicado en el sector norte de la ciudad, en una zona tranquila y exclusiva.",
    ubicacion: "Los Conquistadores 13825, condominio Socaire",
    habitaciones: 3,
    banos: 2,
    costo: 5500,
    smoke: false,
    pets: true,
  },
  {
    id: 2,
    nombre: "Penhouse en centro de la ciudad",
    src: "https://www.guzmanylarrain.com/assets/img/proyectos/galeria-petersburgo-01.jpg",
    descripcion:
      "Espectacular penthouse ubicado en el corazón de la ciudad, con increíbles vistas panorámicas.",
    ubicacion: "Avenida Principal 567, edificio Skyline",
    habitaciones: 5,
    banos: 3,
    costo: 4200,
    smoke: false,
    pets: true,
  },
  {
    id: 3,
    nombre: "Departamento solteros sector centro de la ciudad",
    src: "https://www.guzmanylarrain.com/assets/img/proyectos/galeria-condores-01.jpg",
    descripcion:
      "Ideal para solteros que buscan comodidad y estilo. Excelente ubicación en el centro de la ciudad.",
    ubicacion: "Calle del Sol 789, edificio Moderna",
    habitaciones: 1,
    banos: 1,
    costo: 2800,
    smoke: false,
    pets: true,
  },
  {
    id: 4,
    nombre: "Casa familiar con jardín amplio",
    src: "https://www.guzmanylarrain.com/assets/img/proyectos/promos/promo-barriooeste.jpg",
    descripcion:
      "Amplia casa con 4 habitaciones y un hermoso jardín. Perfecta para familias que buscan confort y espacio.",
    ubicacion: "Calle de la Armonía 456, residencial Harmony",
    habitaciones: 4,
    banos: 2,
    costo: 7200,
    smoke: false,
    pets: true,
  },
  {
    id: 5,
    nombre: "Loft elegante en el corazón del distrito financiero",
    src: "https://www.inmobiliariasip.cl/sitio/img/proyectos/arboleda-proyecto.jpg",
    descripcion:
      "Moderno loft con diseño elegante, ubicado en una de las zonas más exclusivas del distrito financiero.",
    ubicacion: "Calle de la Modernidad 987, edificio Financium",
    habitaciones: 2,
    banos: 1,
    costo: 6000,
    smoke: false,
    pets: true,
  },
  {
    id: 6,
    nombre: "Apartamento de lujo con vistas al mar",
    src: "https://http2.mlstatic.com/D_NQ_NP_919577-MLC54866164934_042023-O.webp",
    descripcion:
      "Espléndido apartamento de lujo con impresionantes vistas al mar. Comodidades exclusivas y diseño contemporáneo.",
    ubicacion: "Avenida del Mar 1234, torre Oceánica",
    habitaciones: 3,
    banos: 2,
    costo: 8500,
    smoke: false,
    pets: false,
  },
  {
    id: 7,
    nombre: "Estudio moderno en el centro cultural",
    src: "https://http2.mlstatic.com/D_NQ_NP_667059-MLC73068571042_112023-O.webp",
    descripcion:
      "Encantador estudio con decoración moderna en el corazón del centro cultural. Ideal para artistas y amantes del arte.",
    ubicacion: "Calle del Arte 456, edificio Creatividad",
    habitaciones: 1,
    banos: 1,
    costo: 3200,
    smoke: true,
    pets: true,
  },
  {
    id: 8,
    nombre: "Casa rústica en las afueras con vistas a la montaña",
    src: "https://http2.mlstatic.com/D_NQ_NP_921393-MLC54917220541_042023-O.webp",
    descripcion:
      "Acogedora casa rústica con encanto, rodeada de naturaleza y con impresionantes vistas a la montaña.",
    ubicacion: "Camino de la Tranquilidad 789, aldea Serena",
    habitaciones: 3,
    banos: 2,
    costo: 5500,
    smoke: false,
    pets: true,
  },
  {
    id: 9,
    nombre: "Ático moderno con terraza privada",
    src: "https://http2.mlstatic.com/D_NQ_NP_855823-MLC54922023390_042023-O.webp",
    descripcion:
      "Ático moderno con amplia terraza privada. Perfecto para disfrutar de la vida al aire libre en pleno centro de la ciudad.",
    ubicacion: "Plaza del Cielo 567, edificio Altura",
    habitaciones: 2,
    banos: 1,
    costo: 4800,
    smoke: false,
    pets: true,
  },
];
/* -----  Scritp de Renderización en Pagina propiedades_alquiler.html -----*/
// Verificar en qué página se encuentra el script
const isPropiedadesAlquilerPage = document.getElementById("alquilerDiv") !== null;
const isIndexPage = document.getElementById("alquilerPrimerosTres") !== null;

// Código para todos los elementos
const alquilerElementsTodos = document.getElementById("alquilerDiv");
let propiedadesHTMLTodosAlquiler = "";

propiedades_alquiler.forEach((val, index) => {
  if (index % 3 === 0) {
    propiedadesHTMLTodosAlquiler += '<div class="row">';
  }

  propiedadesHTMLTodosAlquiler += `
    <div class="col-md-4 md-4">
      <div class="card">
        <img src="${val.src}" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
          <h5 class="card-title">${val.nombre}</h5>
          <p class="card-text">${val.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i>${val.ubicacion}</p>
          <p><i class="fas fa-bed"></i>${val.habitaciones}<i class="fas fa-bath"></i>${val.banos}</p>
          <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
          ${val.smoke
            ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'}
          ${val.pets
            ? '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            : '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'}
        </div>
      </div>
    </div>`;

  if ((index + 1) % 3 === 0 || (index + 1) === propiedades_alquiler.length) {
    propiedadesHTMLTodosAlquiler += '</div>';
  }
});

// Mostrar todos los objetos en la página de propiedades_alquiler.html
if (isPropiedadesAlquilerPage) {
  alquilerElementsTodos.innerHTML = propiedadesHTMLTodosAlquiler;
}

/* -----  Scritp de Renderización en la Pagina index.html -----*/
/// Código solo para los primeros tres elementos de alquiler
const alquilerElementsPrimerosTres = document.getElementById("alquilerPrimerosTres");
let propiedadesHTMLAlquilerPrimerosTres = "";
const primerosTresElementosAlquiler = propiedades_alquiler.slice(0, 3);

primerosTresElementosAlquiler.forEach((val, index) => {
  if (index % 3 === 0) {
    propiedadesHTMLAlquilerPrimerosTres += '<div class="row">';
  }

  propiedadesHTMLAlquilerPrimerosTres += `
    <div class="col-md-4 md-4">
      <div class="card">
        <img src="${val.src}" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
          <h5 class="card-title">${val.nombre}</h5>
          <p class="card-text">${val.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i>${val.ubicacion}</p>
          <p><i class="fas fa-bed"></i>${val.habitaciones}<i class="fas fa-bath"></i>${val.banos}</p>
          <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
          ${val.smoke
            ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'}
          ${val.pets
            ? '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            : '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'}
        </div>
      </div>
    </div>`;

  if ((index + 1) % 3 === 0 || (index + 1) === primerosTresElementosAlquiler.length) {
    propiedadesHTMLAlquilerPrimerosTres += '</div>';
  }
});

// Mostrar los primeros tres objetos en la página index.html
if (isIndexPage) {
  alquilerElementsPrimerosTres.innerHTML = propiedadesHTMLAlquilerPrimerosTres;
}