"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";
import { Badge } from "./ui/Badge";

// Importar iconos
import {
  ChevronRight,
  Moon,
  Search,
  Sun,
  UtensilsCrossed,
  Coffee,
  Cake,
  Salad,
  Pizza,
  Beef,
  Sandwich,
  Egg,
  Wine,
} from "lucide-react";
import { categorias, menu } from "../utils";

// Datos del menú con categorías

export function MenuDigital() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [platosVisibles, setPlatosVisibles] = useState(menu);
  const { theme, toggleTheme } = useTheme();
  const [todosLosPlatos, setTodosLosPlatos] = useState([]);
  const tabsRef = useRef(null);

  // Crear un array con todos los platos al cargar el componente
  useEffect(() => {
    const todos = [];
    Object.keys(menu).forEach((categoria) => {
      todos.push(...menu[categoria]);
    });
    setTodosLosPlatos(todos);
  }, []);

  const handleBusqueda = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);

    if (valor === "") {
      setPlatosVisibles(menu);
      return;
    }

    const resultados = {};

    Object.keys(menu).forEach((categoria) => {
      resultados[categoria] = menu[categoria].filter(
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
        plato.etiquetas.some((etiqueta) =>
          etiqueta.toLowerCase().includes(valor)
        )
    );
    resultados.todas = todosFiltrados;

    setPlatosVisibles(resultados);
  };
  console.log("testttttttttttttttttttttttt", theme);
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
            onChange={handleBusqueda}
          />
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
                  className={`flex flex-col gap-1 py-2 px-4 min-w-[80px] ${
                    categoriaActiva === categoria.id
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  <span>{categoria.icono}</span>
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
                todosLosPlatos.map((plato) => (
                  <Card key={plato.id} className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{plato.nombre}</h3>
                        <span className="font-bold text-green-600 dark:text-green-400">
                          ${plato.precio.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {plato.descripcion}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {plato.etiquetas.map((etiqueta, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {etiqueta}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-1 h-8 px-2 text-xs w-full justify-between"
                      >
                        <div className="flex items-center">
                          Ver detalles
                          <ChevronRight className="ml-1 h-3 w-3" />
                        </div>
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-center py-8 text-muted-foreground">
                  Cargando platos...
                </p>
              )
            ) : platosVisibles.todas && platosVisibles.todas.length > 0 ? (
              platosVisibles.todas.map((plato) => (
                <Card key={plato.id} className="overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{plato.nombre}</h3>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {plato.precio.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {plato.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {plato.etiquetas.map((etiqueta, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {etiqueta}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-1 h-8 px-2 text-xs w-full justify-between"
                    >
                      <div className="flex items-center">
                        Ver detalles
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </div>
                    </Button>
                  </div>
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
                {platosVisibles[categoria.id]?.length > 0 ? (
                  platosVisibles[categoria.id].map((plato) => (
                    <Card key={plato.id} className="overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{plato.nombre}</h3>
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {plato.precio.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {plato.descripcion}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {plato.etiquetas.map((etiqueta, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {etiqueta}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-1 h-8 px-2 text-xs w-full justify-between"
                        >
                          <div className="flex items-center">
                            Ver detalles
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </div>
                        </Button>
                      </div>
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
