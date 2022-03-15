import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await axios(API);
			setProducts(response.data);
		}
		fetchData();
	}, [API]); // Or [] if effect doesn't need props or state

	return products;
};

export default useGetProducts;
