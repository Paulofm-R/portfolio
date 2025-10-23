import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import App from './App.tsx'

import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/700.css";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
