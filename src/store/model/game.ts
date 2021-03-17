import {Store} from './store';

export const Game: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'section.right-side.product-quick-actions',
      text: ['Comprar'],
    },
    maxPrice: {
      container: '.buy--price',
      euroFormat: false,
    },
    outOfStock: {
      container: 'section.right-side.product-quick-actions',
      text: ['Agotado'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.game.es/VIDEOJUEGOS/ACCION/PLAYSTATION-4/PERSONA-5-STRIKERS-LIMITED-EDITION/185836',
    },
    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3060ti',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AORUS-GEFORCE-RTX-3060TI-MASTER-8GB-DDR6X-TARJETA-GRAFICA/185822',
    },
	    {
      brand: 'msi',
      model: 'gaming',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-GAMING-X-TRIO-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1K',
    },
		    {
      brand: 'msi',
      model: 'ventus 3x oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX3070-VENTUS-3X-OC-NVIDIA-GEFORCE-RTX-3070-8-GB-GDDR6/V0PA1J',
    },
		    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3070-GAMING-PRO-8GB-GDDR6-TARJETA-GRAFICA/185005',
    },
		    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-VISION-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184795',
    },
		    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-GAMING-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184794',
    },
		    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3070-EAGLE-OC-8GB-GDDR6-TARJETA-GRAFICA-GAMING/184793',
    },
		    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/ZOTAC-GAMING-GEFORCE-RTX-3070-TWIN-EDGE-OC-WHITE-EDITION-NVIDIA-8-GB-GDDR6/V0PBLE',
    },
			    {
      brand: 'msi',
      model: 'gaming x trio',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/MSI-RTX-3080-GAMING-X-TRIO-10G-TARJETA-GRAFICA-NVIDIA-GEFORCE-RTX-3080-10-GB-GDDR6X/V0P9YG',
    },
			    {
      brand: 'palit',
      model: 'gaming pro',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/PALIT-RTX-3080-GAMING-PRO-10GB-GDDR6X-TARJETA-GRAFICA/185006',
    },
			    {
      brand: 'gigabyte',
      model: 'aorus master',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-MASTER-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184796',
    },
			    {
      brand: 'gigabyte',
      model: 'eagle oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-EAGLE-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184791',
    },
			    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-GEFORCE-RTX-3080-GAMING-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184792',
    },
			    {
      brand: 'gigabyte',
      model: 'vision oc',
      series: '3080',
      url: 'https://www.game.es/COMPONENTES/TARJETA-GRAFICA/PC-GAMING/GIGABYTE-AOURUS-GEFORCE-RTX-3080-VISION-OC-10GB-GDDR6X-TARJETA-GRAFICA-GAMING/184797',
    },
  ],
  name: 'game',
};
