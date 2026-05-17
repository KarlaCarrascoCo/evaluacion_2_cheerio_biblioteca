import { Router } from 'express';

import {
  obtenerLibros,
  obtenerLibrosDisponibles,
  obtenerLibrosPorCategoria
} from '../controllers/datosController.js';

const router = Router();

router.get('/libros', obtenerLibros);

router.get(
  '/libros/disponibles',
  obtenerLibrosDisponibles
);

router.get(
  '/libros/categoria/:categoria',
  obtenerLibrosPorCategoria
);

export default router;