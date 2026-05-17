import express from 'express';

import datosRoutes from './src/routes/datosRoutes.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api', datosRoutes);

app.get('/', (req, res) => {

  res.json({
    mensaje: 'API Biblioteca funcionando'
  });

});

app.listen(PORT, () => {

  console.log(`Servidor corriendo en puerto ${PORT}`);

});