import {Store} from './store';

export const Ribermatica: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.list-unstyled',
      text: ['No disponible'],
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.ribermatica.com/multimedia/55031595',
    },
	{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.ribermatica.com/componente/componente-tarjetas-graficas/gv-n3080vision-oc-10gd?sort=p.price&order=DESC&limit=100',
    },

  ],
  name: 'ribermatica',
};
