import { readFile } from 'fs/promises';

import { resolve } from 'path';

export const leerArchivoHTML =
async (rutaRelativa) => {

  const ruta = resolve(
    process.cwd(),
    rutaRelativa
  );

  const contenido = await readFile(
    ruta,
    'utf-8'
  );

  return contenido;

};