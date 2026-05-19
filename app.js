import express from 'express';

import rutasDatos from './src/routes/datosRoutes.js';

const app = express();

const PORT = 3000;



// ==============================
// RUTAS API
// ==============================

app.use('/api', rutasDatos);



// ==============================
// RUTA PRINCIPAL
// ==============================

app.get('/', (req, res) => {

    res.json({
        mensaje: 'API Biblioteca funcionando'
    });

});



// ==============================
// MAQUETA VISUAL
// ==============================

app.get('/maqueta', (req, res) => {

    res.send(`

    <html>

    <head>

        <title>Biblioteca Central</title>

        <style>

            body{
                font-family: Arial, sans-serif;
                margin: 40px;
                background-color: #f4f4f4;
            }

            h1{
                color: #222;
                margin-bottom: 20px;
            }

            nav{
                margin-bottom: 30px;
            }

            nav a{
                margin-right: 20px;
                text-decoration: none;
                color: blue;
                font-weight: bold;
            }

            h2{
                margin-bottom: 20px;
            }

            .libro{
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 10px;
                box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
            }

            .titulo{
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin-bottom: 10px;
            }

            .descripcion{
                margin-bottom: 10px;
                color: #444;
            }

            .info{
                color: #666;
            }

        </style>

    </head>

    <body>

        <h1>📚 Biblioteca Central Online</h1>

        <nav>

            <a href="/api/libros">
                Libros
            </a>

            <a href="/api/ofertas">
                Ofertas
            </a>

            <a href="/api/contacto">
                Contacto
            </a>

            <a href="/api/libros/categoria">
                Categorías
            </a>

        </nav>

        <h2>Catálogo de Libros</h2>

        <div class="libro">

            <div class="titulo">
                El Laberinto del Fauno
            </div>

            <div class="descripcion">
                Fantasía oscura inspirada en la posguerra española.
            </div>

            <div class="info">
                Guillermo del Toro | 2006 | Alfaguara | Disponible
            </div>

        </div>

        <div class="libro">

            <div class="titulo">
                El Perfume
            </div>

            <div class="descripcion">
                Historia de obsesión, aromas y asesinato.
            </div>

            <div class="info">
                Patrick Süskind | 1985 | Seix Barral | Prestado
            </div>

        </div>

        <div class="libro">

            <div class="titulo">
                El Alquimista
            </div>

            <div class="descripcion">
                Novela filosófica sobre sueños y destino.
            </div>

            <div class="info">
                Paulo Coelho | 1988 | Planeta | Disponible
            </div>

        </div>

    </body>

    </html>

    `);

});



// ==============================
// ENDPOINT OFERTAS
// ==============================

app.get('/api/ofertas', (req, res) => {

    res.json({

        exito: true,

        ofertas: [

            {
                libro: 'El Laberinto del Fauno',
                descuento: '20%'
            },

            {
                libro: 'El Perfume',
                descuento: '15%'
            }

        ]

    });

});



// ==============================
// ENDPOINT CONTACTO
// ==============================

app.get('/api/contacto', (req, res) => {

    res.json({

        exito: true,

        contacto: {

            correo: 'biblioteca@correo.cl',

            telefono: '+56 9 1234 5678',

            direccion: 'Santiago, Chile'

        }

    });

});



// ==============================
// INICIAR SERVIDOR
// ==============================

app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});