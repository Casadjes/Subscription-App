/* eslint-disable react/prop-types */
import { moneyFormat } from "../helpers";

export function SingleItem({ price, type, id, eliminarItem, editItem }) {
	const urlImg = `../src/assets/images/${type}.png`;

	const handleDelete = (e) => {
		e.preventDefault();
		const answer = window.confirm(`Borrar Suscripción a ${type}`);
		if (answer) {
			eliminarItem(id);
		}
	};
	const handleEdit = (e) => {
		e.preventDefault();
		editItem(id);
	};
	return (
		<div className='single-item'>
			<img src={urlImg} alt='Services' />
			<h3>Precio: {moneyFormat(Number(price))}</h3>
			<a href='' onClick={handleDelete}>
				Borrar
			</a>
			<a href='' onClick={handleEdit}>
				Editar
			</a>
		</div>
	);
}
