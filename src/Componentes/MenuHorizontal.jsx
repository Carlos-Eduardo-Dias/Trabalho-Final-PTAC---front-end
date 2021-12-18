import React from 'react'
import { Link } from 'react-router-dom';

import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
			<Link to='/' className="item-menu">
				<span className="text-item-menu">HOME</span>
			</Link>
			<Link to='/' className="item-menu">
				<span className="text-item-menu">ENTRAR</span>
			</Link>    
		</div>
	)
}

export default MenuHorizontal