import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


import App from './App.jsx'
import Home from "./layout/home/index.jsx"
import Reservas from "./layout/reservas/reservas.jsx"
import Historia from "./layout/historia/historia.jsx"
import NotFound from "./layout/notFound/notFound.jsx"

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
)
