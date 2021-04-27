  import {Store} from './store';

export const Asus: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.actions',
      text: ['Añadir a la cesta'],
    },
    outOfStock: {
      container: '.product alert stock',
      text: ['Avísame'],
    },
  },
  links: [
{       brand: 'asus',       model: 'strix',       series: '3080',       url:         'https://estore.asus.com/es/90yv0g13-m0na00-dual-rtx3060ti-8g.html',     },
{       brand: 'asus',       model: 'strix',       series: '3080',       url:         'https://estore.asus.com/es/90yv0gb3-m0na00-dual-rtx3060-12g.html',     },
  ],
  name: 'asus',
};
