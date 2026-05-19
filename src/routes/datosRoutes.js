import { Router } from 'express';

import {

  obtenerLibros,

  obtenerLibrosDisponibles,

  obtenerLibrosPorCategoria

} from '../controllers/datosController.js';

const router = Router();


// TODOS LOS LIBROS

router.get(
  '/libros',
  obtenerLibros
);


// LIBROS DISPONIBLES

router.get(
  '/libros/disponibles',
  obtenerLibrosDisponibles
);


// MOSTRAR CATEGORÍAS DISPONIBLES

router.get(
  '/libros/categoria',
  (req, res) => {

    res.json({

      categorias: [

        'fantasia',

        'suspenso',

        'filosofia'

      ]

    });

  }
);


// FILTRAR POR CATEGORÍA

router.get(
  '/libros/categoria/:categoria',
  obtenerLibrosPorCategoria
);


export default router;