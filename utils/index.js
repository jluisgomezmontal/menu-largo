export const categorias = [
  {
    id: "todas",
    nombre: "Todas",
    icono: <UtensilsCrossed className="h-4 w-4" />,
  },
  { id: "desayunos", nombre: "Desayunos", icono: <Egg className="h-4 w-4" /> },
  {
    id: "entradas",
    nombre: "Entradas",
    icono: <UtensilsCrossed className="h-4 w-4" />,
  },
  {
    id: "ensaladas",
    nombre: "Ensaladas",
    icono: <Salad className="h-4 w-4" />,
  },
  {
    id: "principales",
    nombre: "Principales",
    icono: <UtensilsCrossed className="h-4 w-4" />,
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    icono: <Beef className="h-4 w-4" />,
  },
  { id: "pizzas", nombre: "Pizzas", icono: <Pizza className="h-4 w-4" /> },
  {
    id: "sandwiches",
    nombre: "Sándwiches",
    icono: <Sandwich className="h-4 w-4" />,
  },
  { id: "postres", nombre: "Postres", icono: <Cake className="h-4 w-4" /> },
  { id: "bebidas", nombre: "Bebidas", icono: <Coffee className="h-4 w-4" /> },
  { id: "vinos", nombre: "Vinos", icono: <Wine className="h-4 w-4" /> },
];

export const menu = {
  desayunos: [
    {
      id: 101,
      nombre: "Tostadas con Aguacate",
      descripcion:
        "Pan artesanal tostado con aguacate, tomate cherry y huevo pochado",
      precio: 7.5,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 102,
      nombre: "Tortilla Española",
      descripcion:
        "Auténtica tortilla española con patatas y cebolla caramelizada",
      precio: 6.9,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 103,
      nombre: "Croissant con Jamón y Queso",
      descripcion:
        "Croissant recién horneado con jamón serrano y queso manchego",
      precio: 4.5,
      etiquetas: ["Para llevar"],
    },
  ],
  entradas: [
    {
      id: 1,
      nombre: "Nachos con Guacamole",
      descripcion:
        "Crujientes nachos con guacamole fresco, pico de gallo y crema agria",
      precio: 8.5,
      etiquetas: ["Vegetariano", "Picante"],
    },
    {
      id: 2,
      nombre: "Croquetas de Jamón",
      descripcion: "Deliciosas croquetas caseras de jamón ibérico",
      precio: 7.9,
      etiquetas: ["Popular"],
    },
    {
      id: 3,
      nombre: "Ensalada César",
      descripcion: "Lechuga romana, crutones, queso parmesano y aderezo César",
      precio: 9.5,
      etiquetas: ["Saludable"],
    },
  ],
  ensaladas: [
    {
      id: 201,
      nombre: "Ensalada Mediterránea",
      descripcion:
        "Mezcla de lechugas, tomate, pepino, aceitunas, queso feta y vinagreta de limón",
      precio: 10.5,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 202,
      nombre: "Ensalada de Quinoa",
      descripcion: "Quinoa, aguacate, tomate, pepino, maíz y aderezo de yogur",
      precio: 11.9,
      etiquetas: ["Vegano", "Sin gluten"],
    },
    {
      id: 203,
      nombre: "Ensalada de Pollo",
      descripcion:
        "Pollo a la parrilla, lechuga, tomate, cebolla roja, maíz y aderezo de mostaza y miel",
      precio: 12.5,
      etiquetas: ["Proteico", "Saludable"],
    },
  ],
  principales: [
    {
      id: 4,
      nombre: "Paella Valenciana",
      descripcion: "Auténtica paella con pollo, conejo y verduras de temporada",
      precio: 18.9,
      etiquetas: ["Especialidad", "Para compartir"],
    },
    {
      id: 5,
      nombre: "Solomillo a la Pimienta",
      descripcion:
        "Tierno solomillo de ternera con salsa de pimienta y patatas",
      precio: 22.5,
      etiquetas: ["Premium"],
    },
    {
      id: 6,
      nombre: "Pasta al Pesto",
      descripcion: "Pasta fresca con salsa pesto, piñones y queso parmesano",
      precio: 14.9,
      etiquetas: ["Vegetariano"],
    },
  ],
  hamburguesas: [
    {
      id: 301,
      nombre: "Hamburguesa Clásica",
      descripcion:
        "Carne de ternera, lechuga, tomate, cebolla, queso cheddar y salsa especial",
      precio: 12.9,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 302,
      nombre: "Hamburguesa Vegana",
      descripcion:
        "Beyond meat, lechuga, tomate, cebolla caramelizada y salsa vegana",
      precio: 13.5,
      etiquetas: ["Vegano", "Sostenible"],
    },
    {
      id: 303,
      nombre: "Hamburguesa Gourmet",
      descripcion:
        "Carne madurada, queso brie, cebolla caramelizada, rúcula y salsa de trufa",
      precio: 16.9,
      etiquetas: ["Premium", "Gourmet"],
    },
  ],
  pizzas: [
    {
      id: 401,
      nombre: "Pizza Margarita",
      descripcion: "Salsa de tomate, mozzarella fresca y albahaca",
      precio: 10.9,
      etiquetas: ["Clásico", "Vegetariano"],
    },
    {
      id: 402,
      nombre: "Pizza Cuatro Quesos",
      descripcion: "Mozzarella, gorgonzola, parmesano y queso de cabra",
      precio: 13.5,
      etiquetas: ["Vegetariano", "Especialidad"],
    },
    {
      id: 403,
      nombre: "Pizza Barbacoa",
      descripcion: "Pollo, bacon, cebolla y salsa barbacoa",
      precio: 14.9,
      etiquetas: ["Popular", "Picante"],
    },
  ],
  sandwiches: [
    {
      id: 501,
      nombre: "Club Sándwich",
      descripcion:
        "Pan de molde, pollo, bacon, lechuga, tomate, huevo y mayonesa",
      precio: 9.9,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 502,
      nombre: "Sándwich Vegetal",
      descripcion: "Pan integral, lechuga, tomate, pepino, aguacate y hummus",
      precio: 8.5,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 503,
      nombre: "Sándwich de Atún",
      descripcion: "Pan rústico, atún, huevo duro, lechuga, tomate y mayonesa",
      precio: 8.9,
      etiquetas: ["Proteico"],
    },
  ],
  postres: [
    {
      id: 7,
      nombre: "Tarta de Queso",
      descripcion: "Cremosa tarta de queso con mermelada de frutos rojos",
      precio: 6.5,
      etiquetas: ["Popular"],
    },
    {
      id: 8,
      nombre: "Tiramisú",
      descripcion: "Clásico postre italiano con café, mascarpone y cacao",
      precio: 7.2,
      etiquetas: ["Especialidad"],
    },
    {
      id: 9,
      nombre: "Helado Artesanal",
      descripcion: "Selección de helados artesanales de temporada",
      precio: 5.9,
      etiquetas: ["Para niños"],
    },
  ],
  bebidas: [
    {
      id: 10,
      nombre: "Sangría",
      descripcion:
        "Refrescante sangría con vino tinto, frutas y un toque de canela",
      precio: 6.9,
      etiquetas: ["Alcohol", "Para compartir"],
    },
    {
      id: 11,
      nombre: "Agua Mineral",
      descripcion: "Agua mineral con o sin gas",
      precio: 2.5,
      etiquetas: [],
    },
    {
      id: 12,
      nombre: "Café Espresso",
      descripcion: "Intenso café espresso de comercio justo",
      precio: 2.2,
      etiquetas: ["Caliente"],
    },
  ],
  vinos: [
    {
      id: 601,
      nombre: "Rioja Crianza",
      descripcion: "Vino tinto con 12 meses de crianza en barrica de roble",
      precio: 18.9,
      etiquetas: ["Tinto", "Español"],
    },
    {
      id: 602,
      nombre: "Albariño",
      descripcion: "Vino blanco fresco y afrutado de las Rías Baixas",
      precio: 21.5,
      etiquetas: ["Blanco", "Español"],
    },
    {
      id: 603,
      nombre: "Prosecco",
      descripcion: "Vino espumoso italiano, fresco y ligero",
      precio: 24.9,
      etiquetas: ["Espumoso", "Italiano"],
    },
  ],
};
