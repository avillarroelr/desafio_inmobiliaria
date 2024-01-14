/* ------ Propiedades Ventas ------- */
const propiedades_ventas = [
  {
    id: 1,
    nombre: "Apartamento moderno en zona residencial",
    src: "https://http2.mlstatic.com/D_NQ_NP_733512-MLC46232282141_062021-O.webp",
    descripcion:
      "Espacioso apartamento con diseño moderno y ubicación privilegiada en una zona residencial tranquila.",
    ubicacion: "Calle de la Paz 123, residencial Serenidad",
    habitaciones: 2,
    banos: 1,
    costo: 3500,
    smoke: true,
    pets: true,
  },
  {
    id: 2,
    nombre: "Estudio amueblado en el centro histórico",
    src: "https://http2.mlstatic.com/D_NQ_NP_768193-MLC53880627872_022023-O.webp",
    descripcion:
      "Acogedor estudio completamente amueblado en el corazón del centro histórico. Ideal para estudiantes o profesionales solteros.",
    ubicacion: "Plaza Principal 789, edificio Histórico",
    habitaciones: 1,
    banos: 1,
    costo: 2800,
    smoke: true,
    pets: false,
  },
  {
    id: 3,
    nombre: "Casa adosada con patio trasero",
    src: "https://http2.mlstatic.com/D_NQ_NP_906882-MLC52334358224_112022-O.webp",
    descripcion:
      "Encantadora casa adosada con patio trasero. Perfecta para familias que buscan un espacio al aire libre.",
    ubicacion: "Avenida del Parque 456, urbanización Verde",
    habitaciones: 3,
    banos: 2,
    costo: 4800,
    smoke: false,
    pets: true,
  },
  {
    id: 4,
    nombre: "Loft con vistas panorámicas",
    src: "https://http2.mlstatic.com/D_NQ_NP_748745-MLC72672467582_112023-O.webp",
    descripcion:
      "Increíble loft con vistas panorámicas a la ciudad. Diseño moderno y comodidades de lujo.",
    ubicacion: "Calle de la Vista 789, edificio Panorama",
    habitaciones: 1,
    banos: 1,
    costo: 3200,
    smoke: false,
    pets: true,
  },
  {
    id: 5,
    nombre: "Duplex contemporáneo cerca de parques",
    src: "https://http2.mlstatic.com/D_NQ_NP_704333-MLC50024430821_052022-O.webp",
    descripcion:
      "Espacioso duplex con diseño contemporáneo, ubicado cerca de hermosos parques y áreas verdes.",
    ubicacion: "Avenida de la Naturaleza 234, residencial Verde Vivo",
    habitaciones: 4,
    banos: 3,
    costo: 6000,
    smoke: false,
    pets: true,
  },
  {
    id: 6,
    nombre: "Apartamento minimalista con vistas urbanas",
    src: "https://http2.mlstatic.com/D_NQ_NP_802984-MLC51294269758_082022-O.webp",
    descripcion:
      "Elegante apartamento minimalista con impresionantes vistas urbanas. Diseño moderno y funcional.",
    ubicacion: "Calle del Minimalismo 567, edificio Urbano Chic",
    habitaciones: 2,
    banos: 1,
    costo: 4200,
    smoke: false,
    pets: true,
  },
  {
    id: 7,
    nombre: "Casa de campo con encanto",
    src: "https://http2.mlstatic.com/D_NQ_NP_840027-MLC72439409654_102023-O.webp",
    descripcion:
      "Encantadora casa de campo con detalles rústicos y un ambiente acogedor. Ideal para escapar del bullicio de la ciudad.",
    ubicacion: "Camino Rural 123, aldea Tranquilidad",
    habitaciones: 3,
    banos: 1,
    costo: 5500,
    smoke: true,
    pets: false,
  },
  {
    id: 8,
    nombre: "Piso luminoso con decoración contemporánea",
    src: "https://http2.mlstatic.com/D_NQ_NP_669306-MLC51481356807_092022-O.webp",
    descripcion:
      "Amplio piso con abundante luz natural y una decoración contemporánea. Perfecto para quienes buscan un espacio moderno y luminoso.",
    ubicacion: "Avenida del Brillo 789, edificio Luminarium",
    habitaciones: 2,
    banos: 1,
    costo: 3800,
    smoke: true,
    pets: true,
  },
  {
    id: 9,
    nombre: "Ático elegante con terraza panorámica",
    src: "https://http2.mlstatic.com/D_NQ_NP_928637-MLC51294269724_082022-O.webp",
    descripcion:
      "Ático elegante con una impresionante terraza panorámica. Disfruta de vistas espectaculares desde la comodidad de tu hogar.",
    ubicacion: "Paseo de la Elegancia 456, edificio Altura Elegante",
    habitaciones: 3,
    banos: 2,
    costo: 7200,
    smoke: false,
    pets: false,
  },
];

/* -----  Scritp de Renderización en la Pagina propiedades_venta.html -----*/
// Verificar en qué página se encuentra el script
const isPropiedadesVentaPage = document.getElementById("ventaDiv") !== null;
const isIndexPageVenta = document.getElementById("ventaPrimerosTres") !== null;

// Código para todos los elementos
const ventaElementsTodos = document.getElementById("ventaDiv");
let propiedadesHTMLTodosVenta = "";

propiedades_ventas.forEach((val, index) => {
  if (index % 3 === 0) {
    propiedadesHTMLTodosVenta += '<div class="row">';
  }

  propiedadesHTMLTodosVenta += `
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

  if ((index + 1) % 3 === 0 || (index + 1) === propiedades_ventas.length) {
    propiedadesHTMLTodosVenta += '</div>';
  }
});

// Mostrar todos los objetos en la página de propiedades_venta.html
if (isPropiedadesVentaPage) {
  ventaElementsTodos.innerHTML = propiedadesHTMLTodosVenta;
}
/* -----  Scritp de Renderización en la Pagina index.html -----*/
// Código solo para los primeros tres elementos de venta
const ventaElementsPrimerosTres = document.getElementById("ventaPrimerosTres");
let propiedadesHTMLVentaPrimerosTres = "";
const primerosTresElementosVenta = propiedades_ventas.slice(0, 3);

primerosTresElementosVenta.forEach((val, index) => {
  if (index % 3 === 0) {
    propiedadesHTMLVentaPrimerosTres += '<div class="row">';
  }

  propiedadesHTMLVentaPrimerosTres += `
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

  if ((index + 1) % 3 === 0 || (index + 1) === primerosTresElementosVenta.length) {
    propiedadesHTMLVentaPrimerosTres += '</div>';
  }
});

// Mostrar los primeros tres elementos en la página index.html
if (isIndexPageVenta) {
  ventaElementsPrimerosTres.innerHTML = propiedadesHTMLVentaPrimerosTres;
}