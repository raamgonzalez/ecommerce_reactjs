import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Item.css'

const Item = (props) => {
const { id, title, description, price, img, alt, stock, offer } = props;

	return (
	<Link className='link__card' to={`/item/detail/${id}`}>
		<section className='box__card'>
			<div className='card__stock--container'>
						<h4 className='card__stock'>{stock}u</h4>
			</div>
		{/* flex flex-col justify-center align-middle items-center gap-1 bg-white shadow-md rounded-lg max-w-sm dark:border-gray-700 */}
			<div className='card'>
			{/* w-72 h-72  rounded-2xl p-4 overflow-clip */}
				<img src={img} className='card__image' alt={alt || 'Imagen del producto'}/>
				<div className='card__header px-6 pb-3 '>
					<h3 className='text-slate-800 font-bold text-xl tracking-tight'>
						{title}
					</h3>
					<div className='card__main items-center mt-2.5 mb-5'>
						<p className='card__description'>{description}</p>
					</div>
					<div className='card_footer flex items-center justify-between'>
						<div className='card_footer--price'>
							<span className='text-xl font-bold text-slate-800'/>
							<p className='text__offer--price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className='text__offer--item font-bold'>ARS ${price}</p> : null}
						</div>
						{/*Editar las clases y manejar por css*/}
					<div>
						<Link to='#' class= {offer===true? 'btn__cart btn__cart--offer' : 'btn__cart btn__cart--nooffer'}>
							Agregar al Carrito
						</Link>
					</div>
					</div>
				</div>	
			</div>	
		</section>
	</Link>
	);
};

export default Item;