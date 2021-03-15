import {Store} from './store';

export const Maher: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.buyFormSubmit btn btn-primary btn buy',
      text: ['Comprar producto'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.buyFormSubmit btn btn-primary btn buy',
      text: [''],
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.electronicamaher.com/barebone-portatil-falkon-gaming-lapqc71bb-intel-core-i7-9750h-geforce-rtx-2070-max-q-156-no-so',
    },
	{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'hhttps://www.electronicamaher.com/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3080-master-10g-10gb-gddr6x',
    },

  ],
  name: 'maher',
};
