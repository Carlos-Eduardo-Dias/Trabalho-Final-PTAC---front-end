import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import CardNoticias from './CardNoticias'
import API from '../Services/API'
import './Noticias.css'

function Noticias() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		API
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('ERRO: ', err)
			})
	}, [])

	return (
		<main className='noticias-container'>
       <h1 class='p-3 texto'>PÁGINA INICIAL</h1>
			{
				noticias.map(noticia => {
					return (
						<div key={noticia._id} class='m-2 col-11 row-3'>
							<CardNoticias titulo={noticia.titulo} date={noticia.dataPublicacao} idNoticia={noticia._id} autor={noticia.autor}/>
						</div>
					)
				})
			}

		</main>
	)
}

export default Noticias;