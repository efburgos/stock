import {Store} from './store';

export const PCComponentes: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#btnsWishAddBuy',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '#precio-main',
      euroFormat: true,
    },
    outOfStock: {
      container: '#btnsWishAddBuy',
      text: ['Avísame'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.pccomponentes.com/gigabyte-geforce-gtx-1660-super-oc-6gb-gddr6',
    },
    {
      brand: 'PNY',
      model: 'GT-710',
      series: '3080',
      url:
	'https://www.pccomponentes.com/pny-geforce-gt-710-pci-e-20-low-profile-2gb-gddr3',
   },
