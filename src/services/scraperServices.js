import * as cheerio from 'cheerio';

import { leerArchivoHTML } from '../utils/archivoUtil.js';

const cargarHTML = async () => {

  const html = await leerArchivoHTML(
    'public/catalogo.html'
  );

  return cheerio.load(html);

};

export const extraerLibros = async () => {

  const $ = await cargarHTML();

  const libros = [];

  $('.libro').each((i, el) => {

    libros.push({

      id: $(el).attr('data-id'),

      categoria: $(el).attr('data-categoria'),

      titulo: $(el)
        .find('.titulo')
        .text()
        .trim(),

      autor: $(el)
        .find('.autor')
        .text()
        .trim(),

      isbn: $(el)
        .find('.isbn')
        .text()
        .trim(),

      anio: $(el)
        .find('.anio')
        .text()
        .trim(),

      editorial: $(el)
        .find('.editorial')
        .text()
        .trim(),

      estado: $(el)
        .find('.estado')
        .text()
        .trim(),

      ubicacion: $(el)
        .find('.ubicacion')
        .text()
        .trim()

    });

  });

  return libros;

};

export const extraerLibrosDisponibles =
async () => {

  const libros = await extraerLibros();

  return libros.filter(
    libro => libro.estado === 'Disponible'
  );

};