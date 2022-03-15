import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};
	if (product.images.length > 1) {
		return (
			<div className={styles['ProductItem']}>
				<Image src={product.images[0]} alt={product.title}  width={240} height={240} />
				<div className={styles['product-info']}>
					<div>
						<p>${product.price}</p>
						<p>{product.title}</p>
					</div>
					<button 
						className={styles['more-clickable-area']} 
						onClick={() => handleClick(product)}  >
						{  state.cart.includes(product) ? <Image className={styles['disabled'], styles['add-to-cart-btn']} width={40} height={40} src={addedToCartImage} alt="added to cart" />  : <Image className={styles['add-to-cart-btn'], styles['pointer']} width={40} height={40} src={addToCartImage} alt="add to cart" /> }
					</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
	
};

export default ProductItem;
