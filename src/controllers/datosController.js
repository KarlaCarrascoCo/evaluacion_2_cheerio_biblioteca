import {
  extraerLibros,
  extraerLibrosDisponibles
} from '../services/scraperServices.js';

export const obtenerLibros = async (
  req,
  res
) => {

  try {

    const libros =
      await extraerLibros();

    res.json({
      exito: true,
      total: libros.length,
      datos: libros
    });

  } catch (error) {

    res.status(500).json({
      exito: false,
      mensaje: error.message
    });

  }

};

export const obtenerLibrosDisponibles =
async (req, res) => {

  try {

    const libros =
      await extraerLibrosDisponibles();

    res.json({
      exito: true,
      total: libros.length,
      datos: libros
    });

  } catch (error) {

    res.status(500).json({
      exito: false,
      mensaje: error.message
    });

  }

};

export const obtenerLibrosPorCategoria =
async (req, res) => {

  try {

    const { categoria } = req.params;

    const libros =
      await extraerLibros();

    const filtrados = libros.filter(
      libro =>
        libro.categoria.toLowerCase()
        === categoria.toLowerCase()
    );

    if (filtrados.length === 0) {

      return res.status(404).json({
        exito: false,
        mensaje:
          'Categoría no encontrada'
      });

    }

    res.json({
      exito: true,
      categoria,
      total: filtrados.length,
      datos: filtrados
    });

  } catch (error) {

    res.status(500).json({
      exito: false,
      mensaje: error.message
    });

  }

};