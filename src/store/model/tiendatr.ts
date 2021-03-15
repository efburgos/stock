import {Store} from './store';

export const Tiendatr: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.text',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.text',
      text: ['Avísame!'],
    },
  },
  links: [
    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-evga-geforce-rtx-3080-ftw3-ultra-gaming--10gb-gddr6x',
    },
	{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-evga-geforce-rtx-3070-ftw3-ultra-gaming-8gb-gddr6',
    },
		{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-gigabyte-aorus-geforce-rtx-3070-master-8g-8gb-gddr6',
    },
		{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-gigabyte-geforce-rtx-3070-vision-oc-8g--8gb-gddr6',
    },
		{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6',
    },
		{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-gigabyte-geforce-rtx-3070-eagle-oc-8g-8gb-gddr6',
    },
			{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-evga-geforce-rtx-3060-ti-xc-gaming-8gb-gddr6',
    },
			{
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3080',
      url:
        'https://www.tiendatr.com/tarjeta-grafica-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro--8gb-gddr6-2',
    },
  ],
  name: 'tiendatr',
};
