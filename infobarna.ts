import {Store} from './store';

export const Infobarna: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.boto-gran',
      text: ['Añadir a la cesta'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://infobarna.com/es/producte-941/mars-gaming-mh5.html',
    },
	{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://infobarna.com/es/producte-9959/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3070-master-8g-8gb-gddr6.html',
    },

  ],
  name: 'infobarna',
};
