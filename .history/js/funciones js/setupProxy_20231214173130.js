// src/setupProxy.js

import { createProxyMiddleware } from 'http-proxy-middleware';
import { proxy } from './familias';  // Importa el proxy

// Añade el proxy al objeto de configuración de Create React App
const setupProxy = app => app.use('/fama-market/api', proxy);

export default setupProxy;  // Exporta la función setupProxy
