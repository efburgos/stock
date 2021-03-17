import {Store} from './store';

export const Efecto2000: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.box-info-product',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '.text-price-total',
      euroFormat: true,
    },
    outOfStock: {
      container: '.box-info-product',
      text: ['Este producto ya no está disponible'],
    },
  },
  links: [
    {
      brand: 'evga',
      model: 'ftw3 ultra',
      series: '3090',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/210063-tarjeta-grafica-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x-4250812438171.html',
    },
	    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3090',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/212344-tarjeta-grafica-evga-geforce-rtx-3090-xc3-ultra-gaming-24gb-gddr6x-4250812438195.html',
    },
		    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3090',
      url:
        'https://www.efecto2000.es/prod/tarjetas-graficas/206400-gigabyte-vga-nvidia-rtx-3090-gaming-oc-24g-ddr6x-4719331307547.html',
    },
		    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3070',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/211607-4719331307844-4719331307844.html',
    },
		    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/211606-tarjeta-grafica-gigabyte-geforce-rtx-3070-gaming-oc-8g-8gb-gddr6-4719331307691.html',
    },
		    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/212315-tarjeta-grafica-gigabyte-geforce-rtx-3070-vision-oc-8g-8gb-gddr6-4719331307790.html',
    },
		    {
      brand: 'evga',
      model: 'xc3 ultra',
      series: '3070',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/210307-tarjeta-grafica-evga-geforce-rtx-3070-xc3-ultra-gaming-8gb-gddr6-4250812438492.html',
    },
		    {
      brand: 'evga',
      model: 'xc gaming',
      series: '3060ti',
      url:
        'https://www.efecto2000.es/prod/componentes-pc/213138-tarjeta-grafica-evga-geforce-rtx-3060-ti-xc-gaming-8gb-gddr6-193575012087.html',
    },
  ],
  name: 'efecto2000',
};
