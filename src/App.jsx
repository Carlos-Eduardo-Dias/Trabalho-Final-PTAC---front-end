import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cabecario from './Componentes/Cabecario'
import MenuHorizontal from './Componentes/MenuHorizontal'
import Noticias from './Componentes/Noticias'
import Noticia from './Componentes/Noticia'
import Rodape from './Componentes/Rodape'
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Cabecario />
				<MenuHorizontal />
				<Routes>
					<Route path='/' element={<Noticias />} />
					<Route path=':idNoticia' element={<Noticia />} />
				</Routes>
			</div>
      <Rodape />
		</BrowserRouter>

	);
}

export default App