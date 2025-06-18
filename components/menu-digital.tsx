"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Search,
  Sun,
  UtensilsCrossed,
  Coffee,
  Cake,
  Salad,
  Pizza,
  Sandwich,
  Wine,
  Martini,
  X,
  EggFried,
  Beef,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PiHamburger } from "react-icons/pi";

// Datos del menú con categorías adicionales
const categorias = [
  {
    id: "todas",
    nombre: "Todas",
    icono: <UtensilsCrossed className="h-4 w-4" />,
  },
  {
    id: "desayunos",
    nombre: "Desayunos",
    icono: <EggFried className="h-4 w-4" />,
  },
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
    icono: <Beef className="h-4 w-4" />,
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
  {
    id: "mixologia",
    nombre: "Mixologia",
    icono: <Martini className="h-4 w-4" />,
  },
  { id: "vinos", nombre: "Vinos", icono: <Wine className="h-4 w-4" /> },
];

const menu = {
  desayunos: [
    {
      id: 101,
      nombre: "Tostadas con Aguacate",
      descripcion:
        "Pan artesanal tostado con aguacate, tomate cherry y huevo pochado",
      precio: 139,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 102,
      nombre: "Tortilla Española",
      descripcion:
        "Auténtica tortilla española con patatas y cebolla caramelizada",
      precio: 128,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 103,
      nombre: "Croissant con Jamón y Queso",
      descripcion:
        "Croissant recién horneado con jamón serrano y queso manchego",
      precio: 83,
      etiquetas: ["Clásico"],
    },
  ],
  entradas: [
    {
      id: 1,
      nombre: "Nachos con Guacamole",
      descripcion:
        "Crujientes nachos con guacamole fresco, pico de gallo y crema agria",
      precio: 157,
      etiquetas: ["Vegetariano", "Picante"],
    },
    {
      id: 2,
      nombre: "Croquetas de Jamón",
      descripcion: "Deliciosas croquetas caseras de jamón ibérico",
      precio: 146,
      etiquetas: ["Popular"],
    },
    {
      id: 3,
      nombre: "Ensalada César",
      descripcion: "Lechuga romana, crutones, queso parmesano y aderezo César",
      precio: 176,
      etiquetas: ["Saludable"],
    },
  ],
  ensaladas: [
    {
      id: 201,
      nombre: "Ensalada Mediterránea",
      descripcion:
        "Mezcla de lechugas, tomate, pepino, aceitunas, queso feta y vinagreta de limón",
      precio: 194,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 202,
      nombre: "Ensalada de Quinoa",
      descripcion: "Quinoa, aguacate, tomate, pepino, maíz y aderezo de yogur",
      precio: 220,
      etiquetas: ["Vegano", "Sin gluten"],
    },
    {
      id: 203,
      nombre: "Ensalada de Pollo",
      descripcion:
        "Pollo a la parrilla, lechuga, tomate, cebolla roja, maíz y aderezo de mostaza y miel",
      precio: 231,
      etiquetas: ["Proteico", "Saludable"],
    },
  ],
  principales: [
    {
      id: 4,
      nombre: "Paella Valenciana",
      descripcion: "Auténtica paella con pollo, conejo y verduras de temporada",
      precio: 350,
      etiquetas: ["Especialidad", "Popular"],
    },
    {
      id: 5,
      nombre: "Solomillo a la Pimienta",
      descripcion:
        "Tierno solomillo de ternera con salsa de pimienta y patatas",
      precio: 416,
      etiquetas: ["Popular"],
    },
    {
      id: 6,
      nombre: "Pasta al Pesto",
      descripcion: "Pasta fresca con salsa pesto, piñones y queso parmesano",
      precio: 276,
      etiquetas: ["Vegetariano"],
    },
  ],
  hamburguesas: [
    {
      id: 301,
      nombre: "Hamburguesa Clásica",
      descripcion:
        "Carne de ternera, lechuga, tomate, cebolla, queso cheddar y salsa especial",
      precio: 239,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 302,
      nombre: "Hamburguesa Vegana",
      descripcion:
        "Beyond meat, lechuga, tomate, cebolla caramelizada y salsa vegana",
      precio: 250,
      etiquetas: ["Vegano", "Saludable"],
    },
    {
      id: 303,
      nombre: "Hamburguesa Gourmet",
      descripcion:
        "Carne madurada, queso brie, cebolla caramelizada, rúcula y salsa de trufa",
      precio: 313,
      etiquetas: ["Popular"],
    },
  ],
  pizzas: [
    {
      id: 401,
      nombre: "Pizza Margarita",
      descripcion: "Salsa de tomate, mozzarella fresca y albahaca",
      precio: 202,
      etiquetas: ["Saludable", "Vegetariano"],
    },
    {
      id: 402,
      nombre: "Pizza Cuatro Quesos",
      descripcion: "Mozzarella, gorgonzola, parmesano y queso de cabra",
      precio: 250,
      etiquetas: ["Vegetariano"],
    },
    {
      id: 403,
      nombre: "Pizza Barbacoa",
      descripcion: "Pollo, bacon, cebolla y salsa barbacoa",
      precio: 276,
      etiquetas: ["Popular", "Picante"],
    },
  ],
  sandwiches: [
    {
      id: 501,
      nombre: "Club Sándwich",
      descripcion:
        "Pan de molde, pollo, bacon, lechuga, tomate, huevo y mayonesa",
      precio: 183,
      etiquetas: ["Clásico", "Popular"],
    },
    {
      id: 502,
      nombre: "Sándwich Vegetal",
      descripcion: "Pan integral, lechuga, tomate, pepino, aguacate y hummus",
      precio: 157,
      etiquetas: ["Vegetariano", "Saludable"],
    },
    {
      id: 503,
      nombre: "Sándwich de Atún",
      descripcion: "Pan rústico, atún, huevo duro, lechuga, tomate y mayonesa",
      precio: 165,
      etiquetas: ["Proteico", "Saludable"],
    },
  ],
  postres: [
    {
      id: 7,
      nombre: "Tarta de Queso",
      descripcion: "Cremosa tarta de queso con mermelada de frutos rojos",
      precio: 120,
      etiquetas: ["Popular"],
    },
    {
      id: 8,
      nombre: "Tiramisú",
      descripcion: "Clásico postre italiano con café, mascarpone y cacao",
      precio: 133,
      etiquetas: ["Especialidad"],
    },
    {
      id: 9,
      nombre: "Helado Artesanal",
      descripcion: "Selección de helados artesanales de temporada",
      precio: 109,
      etiquetas: ["Para niños"],
    },
  ],
  bebidas: [
    {
      id: 10,
      nombre: "Sangría",
      descripcion:
        "Refrescante sangría con vino tinto, frutas y un toque de canela",
      precio: 128,
      etiquetas: ["Alcohol", "Vino"],
    },
    {
      id: 11,
      nombre: "Agua Mineral",
      descripcion: "Agua mineral con o sin gas",
      precio: 46,
      etiquetas: [],
    },
    {
      id: 12,
      nombre: "Café Espresso",
      descripcion: "Intenso café espresso de comercio justo",
      precio: 41,
      etiquetas: ["Caliente"],
    },
  ],
  mixologia: [
    {
      id: 801,
      nombre: "Margarita Clásica",
      descripcion:
        "Tequila, licor de naranja y jugo de limón fresco con escarcha de sal.",
      precio: 160,
      etiquetas: ["Tequila", "Cítrico"],
    },
    {
      id: 802,
      nombre: "Whiskey Sour",
      descripcion:
        "Whiskey, jugo de limón, azúcar y clara de huevo (opcional) para un acabado espumoso.",
      precio: 170,
      etiquetas: ["Whiskey", "Clásico"],
    },
    {
      id: 803,
      nombre: "Brandy Alexander",
      descripcion:
        "Brandy, licor de cacao oscuro y crema. Un cóctel cremoso y elegante.",
      precio: 180,
      etiquetas: ["Brandy", "Dulce"],
    },
    {
      id: 804,
      nombre: "Mojito",
      descripcion:
        "Ron blanco, hierbabuena, azúcar, limón y agua mineral. Refrescante y cubano.",
      precio: 150,
      etiquetas: ["Ron", "Refrescante", "Caribeño"],
    },
    {
      id: 805,
      nombre: "Piña Colada",
      descripcion:
        "Ron, crema de coco y jugo de piña. Suave, dulce y tropical.",
      precio: 160,
      etiquetas: ["Ron", "Dulce", "Tropical"],
    },
    {
      id: 806,
      nombre: "Cosmopolitan",
      descripcion:
        "Vodka, licor de naranja, jugo de arándano y limón. Moderno y vibrante.",
      precio: 175,
      etiquetas: ["Vodka", "Frutal"],
    },
    {
      id: 807,
      nombre: "Carajillo",
      descripcion: "Licor 43 con espresso caliente. El favorito de sobremesa.",
      precio: 155,
      etiquetas: ["Ron", "Café", "Digestivo"],
    },
    {
      id: 808,
      nombre: "Negroni",
      descripcion: "Ginebra, vermut rojo y Campari. Fuerte y amargo.",
      precio: 180,
      etiquetas: ["Ginebra", "Clásico", "Europeo"],
    },
  ],
  vinos: [
    {
      id: 601,
      nombre: "Rioja Crianza",
      descripcion: "Vino tinto con 12 meses de crianza en barrica de roble",
      precio: 350,
      etiquetas: ["Vino", "Tinto", "Español"],
    },
    {
      id: 602,
      nombre: "Albariño",
      descripcion: "Vino blanco fresco y afrutado de las Rías Baixas",
      precio: 398,
      etiquetas: ["Vino", "Blanco", "Español"],
    },
    {
      id: 603,
      nombre: "Prosecco",
      descripcion: "Vino espumoso italiano, fresco y ligero",
      precio: 461,
      etiquetas: ["Vino", "Espumoso", "Italiano"],
    },
  ],
};

export function MenuDigital() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [platosVisibles, setPlatosVisibles] = useState<any>(menu);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [todosLosPlatos, setTodosLosPlatos] = useState<any[]>([]);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Asegurarse de que el componente está montado para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
    // Crear un array con todos los platos
    const todos: any[] = [];
    Object.keys(menu).forEach((categoria) => {
      todos.push(...menu[categoria as keyof typeof menu]);
    });
    setTodosLosPlatos(todos);
  }, []);

  const handleBusqueda = (e: any) => {
    const valor = e;
    setBusqueda(valor);

    if (valor === "") {
      setPlatosVisibles(menu);
      return;
    }

    const resultados: any = {};

    Object.keys(menu).forEach((categoria) => {
      resultados[categoria] = menu[categoria as keyof typeof menu].filter(
        (plato) =>
          plato.nombre.toLowerCase().includes(valor) ||
          plato.descripcion.toLowerCase().includes(valor) ||
          plato.etiquetas.some((etiqueta) =>
            etiqueta.toLowerCase().includes(valor)
          )
      );
    });

    // Filtrar también todos los platos para la categoría "todas"
    const todosFiltrados = todosLosPlatos.filter(
      (plato) =>
        plato.nombre.toLowerCase().includes(valor) ||
        plato.descripcion.toLowerCase().includes(valor) ||
        plato.etiquetas.some((etiqueta: any) =>
          etiqueta.toLowerCase().includes(valor)
        )
    );
    resultados.todas = todosFiltrados;

    setPlatosVisibles(resultados);
  };

  useEffect(() => {
    handleBusqueda(busqueda);
  }, [busqueda]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Evitar renderizado en el servidor para prevenir problemas de hidratación
  if (!mounted) return null;

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Nuestro Menú</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar platos..."
            className="pl-10"
            value={busqueda}
            onChange={() => handleBusqueda(busqueda)}
          />
          {busqueda && (
            <button
              type="button"
              onClick={() => handleBusqueda("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </header>

      <Tabs
        defaultValue="todas"
        value={categoriaActiva}
        onValueChange={setCategoriaActiva}
      >
        <div className="relative mb-4">
          {/* Indicadores de scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

          {/* TabsList con scroll horizontal */}
          <div
            ref={tabsRef}
            className="overflow-x-auto pb-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <TabsList className="inline-flex w-auto min-w-full">
              {categorias.map((categoria) => (
                <TabsTrigger
                  key={categoria.id}
                  value={categoria.id}
                  className={cn(
                    "flex flex-col gap-1 py-2 px-4 min-w-[80px]",
                    categoriaActiva === categoria.id
                      ? "bg-primary text-primary-foreground"
                      : ""
                  )}
                >
                  <span className="mt-3">{categoria.icono}</span>
                  <span className="text-xs whitespace-nowrap">
                    {categoria.nombre}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {/* TabsContent para la categoría "todas" */}
        <TabsContent value="todas">
          <div className="space-y-4">
            {busqueda === "" ? (
              todosLosPlatos.length > 0 ? (
                todosLosPlatos.map((plato: any) => (
                  <Card key={plato.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{plato.nombre}</h3>
                        <span className="font-bold text-green-600 dark:text-green-400">
                          $ {plato.precio}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {plato.descripcion}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {plato.etiquetas.map(
                          (etiqueta: string, index: number) => (
                            <div
                              key={index}
                              onClick={() =>
                                setBusqueda(etiqueta.toLowerCase())
                              }
                            >
                              <Badge
                                variant="outline"
                                className="text-xs cursor-pointer"
                              >
                                {etiqueta}
                              </Badge>
                            </div>
                          )
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 h-8 px-2 text-xs w-full justify-between"
                        asChild
                      ></Button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-center py-8 text-muted-foreground">
                  Cargando platos...
                </p>
              )
            ) : platosVisibles.todas && platosVisibles.todas.length > 0 ? (
              platosVisibles.todas.map((plato: any) => (
                <Card key={plato.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{plato.nombre}</h3>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        $ {plato.precio}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {plato.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {plato.etiquetas.map(
                        (etiqueta: string, index: number) => (
                          <div
                            key={index}
                            onClick={() => setBusqueda(etiqueta.toLowerCase())}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs cursor-pointer"
                            >
                              {etiqueta}
                            </Badge>
                          </div>
                        )
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-1 h-8 px-2 text-xs w-full justify-between"
                      asChild
                    ></Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No se encontraron platos
              </p>
            )}
          </div>
        </TabsContent>

        {/* TabsContent para las demás categorías */}
        {categorias
          .filter((cat) => cat.id !== "todas")
          .map((categoria) => (
            <TabsContent key={categoria.id} value={categoria.id}>
              <div className="space-y-4">
                {platosVisibles[categoria.id as keyof typeof platosVisibles]
                  ?.length > 0 ? (
                  platosVisibles[
                    categoria.id as keyof typeof platosVisibles
                  ].map((plato: any) => (
                    <Card key={plato.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{plato.nombre}</h3>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            $ {plato.precio}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {plato.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {plato.etiquetas.map(
                            (etiqueta: string, index: number) => (
                              <div
                                key={index}
                                onClick={() =>
                                  setBusqueda(etiqueta.toLowerCase())
                                }
                              >
                                <Badge
                                  variant="outline"
                                  className="text-xs cursor-pointer"
                                >
                                  {etiqueta}
                                </Badge>
                              </div>
                            )
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-1 h-8 px-2 text-xs w-full justify-between"
                          asChild
                        ></Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center py-8 text-muted-foreground">
                    No se encontraron platos en esta categoría
                  </p>
                )}
              </div>
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}
