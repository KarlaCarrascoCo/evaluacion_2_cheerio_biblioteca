# 📚 Evaluación 2 — Backend Biblioteca con Cheerio

## Descripción

Proyecto backend desarrollado con Node.js y Express que utiliza Cheerio para procesar una maqueta HTML de una biblioteca virtual.

La aplicación permite extraer información estructurada desde el DOM utilizando selectores CSS y entregar los resultados mediante endpoints REST en formato JSON.

Se aplican principios de separación por capas, manejo de errores, validaciones y buenas prácticas de desarrollo backend.

---

# 🚀 Tecnologías Utilizadas

- Node.js
- Express
- Cheerio
- JavaScript ES Modules
- GitHub
- Postman
- VS Code

---

# 📁 Estructura del Proyecto

```text
evaluacion_2_cheerio_biblioteca/
│
├── public/
│   └── catalogo.html
│
├── src/
│   ├── controllers/
│   │   └── datosController.js
│   │
│   ├── routes/
│   │   └── datosRoutes.js
│   │
│   ├── services/
│   │   └── scraperServices.js
│   │
│   └── utils/
│       └── archivoUtil.js
│
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Instalación y Ejecución

## 1. Instalar dependencias

```bash
npm install
```

---

## 2. Ejecutar servidor

```bash
node app.js
```

Servidor disponible en:

```text
http://localhost:3000
```

---

# 📌 Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Información general de la API |
| GET | `/maqueta` | Visualizar la maqueta HTML |
| GET | `/api/libros` | Obtener todos los libros |
| GET | `/api/libros/disponibles` | Obtener libros disponibles |
| GET | `/api/libros/categoria` | Obtener categorías |
| GET | `/api/libros/categoria/:categoria` | Filtrar libros por categoría |
| GET | `/api/ofertas` | Obtener ofertas activas |
| GET | `/api/contacto` | Obtener datos de contacto |

---

# 📚 Categorías Disponibles

- fantasia
- suspenso
- filosofia

---

# 📖 Libros Utilizados

- El Laberinto del Fauno
- El Perfume
- El Alquimista

---

# 🧪 Ejemplo de Respuesta

## GET /api/libros

```json
{
  "exito": true,
  "total": 3,
  "datos": [
    {
      "id": "1",
      "categoria": "fantasia",
      "titulo": "El Laberinto del Fauno",
      "autor": "Guillermo del Toro",
      "isbn": "ISBN: 978-607-07-4100-6",
      "anio": "Año: 2006",
      "editorial": "Editorial: Alfaguara",
      "estado": "Disponible",
      "ubicacion": "Estante F-01"
    }
  ]
}
```

---

# 🔎 Selectores Utilizados con Cheerio

## Selector de libros

```javascript
$('.libro')
```

Selecciona todos los libros dentro del catálogo HTML.

Datos extraídos:

- ID
- categoría
- título
- autor
- ISBN
- año
- editorial
- estado
- ubicación

---

# ❌ Manejo de Errores

La aplicación implementa:

- Validación de categorías inexistentes
- Manejo de rutas no encontradas
- Respuestas JSON estructuradas
- Manejo de errores del servidor

---

## Ejemplo de Error

GET /api/libros/categoria/terror

Respuesta:

```json
{
  "exito": false,
  "mensaje": "Categoría no encontrada"
}
```

---

# 🧠 Conceptos JavaScript Aplicados

- ES Modules (`import/export`)
- Async/Await
- Funciones flecha
- Modularización
- Express Router
- Parseo HTML con Cheerio
- JSON API REST
- Manejo de errores
- Separación por capas

---

# 🧪 Pruebas Realizadas

Las pruebas fueron realizadas utilizando:

- Navegador web
- Postman

Endpoints probados:

```text
GET /api/libros
GET /api/libros/disponibles
GET /api/libros/categoria
GET /api/libros/categoria/fantasia
GET /api/ofertas
GET /api/contacto
GET /maqueta

## categoría inexistente
GET /api/libros/categoria/terror
```

---

# 🌐 Repositorio GitHub

Repositorio del proyecto:

```text
https://github.com/KarlaCarrascoCo/evaluacion_2_cheerio_biblioteca
```

---

# 👨‍💻 Integrante

- Karla Carrasco

---

# ✅ Estado del Proyecto

Proyecto funcional y operativo.

La API fue probada correctamente mediante navegador y Postman.