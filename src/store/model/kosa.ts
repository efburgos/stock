import {Store} from './store';

export const Kosa: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product-actions-wrapper',
      text: ['Añadir al carrito'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.product-actions-wrapper',
      text: ['Añadir a la lista de espera'],
    },
  },
  links: [
    {
      brand: 'evga',
      model: 'ftw3',
      series: '3080',
      url:
        'https://kosa.es/tienda/componentes/tarjetas-graficas/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x/',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url:
        'https://kosa.es/tienda/componentes/tarjetas-graficas/tarjeta-grafica-gigabyte-geforce-rtx-3080-gaming-oc-10g-10gb-gddr6x/',
    },
	    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3060ti',
      url:
        'https://kosa.es/tienda/componentes/tarjetas-graficas/tarjeta-grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-8gb-gddr6/',
    },
		    {
      brand: 'evga',
      model: 'xc3 black',
      series: '3080',
      url:
        'https://kosa.es/tienda/componentes/tarjetas-graficas/tarjeta-grafica-evga-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x//',
    },
			    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://kosa.es/tienda/componentes/tarjetas-graficas/tarjeta-grafica-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x/',
    },
  ],
  name: 'kosa',
};
