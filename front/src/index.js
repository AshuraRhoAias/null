/**
 * PUNTO DE ENTRADA - REACT APP
 *
 * NOTA PARA PRINCIPIANTES:
 * Este es el archivo que React busca primero cuando inicia la aplicación.
 * Su única función es "montar" (renderizar) tu aplicación en el HTML.
 *
 * ¿Qué hace?
 * 1. Importa React y ReactDOM
 * 2. Importa tu aplicación principal (PresentationApp)
 * 3. La renderiza en el elemento con id='root' del HTML
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import PresentationApp from './apps/PresentationApp';
import './styles/PresentationApp.css';

/**
 * Busca el elemento HTML con id="root"
 * (está en public/index.html)
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renderiza (muestra) la aplicación dentro de ese elemento
 *
 * StrictMode ayuda a detectar problemas potenciales
 * (puedes quitarlo sin problema si causa warnings)
 */
root.render(
  <React.StrictMode>
    <PresentationApp />
  </React.StrictMode>
);
