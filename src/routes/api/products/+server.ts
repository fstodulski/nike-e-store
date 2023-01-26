import type { RequestHandler } from '@sveltejs/kit';

const PRODUCTS: Array<any> = [
  {
    img: '/shoes/green_1.png',
    name: 'Air Max 97',
    price: 20.99,
    categories: ['all', 'running']
  },
  {
    img: '/shoes/red_1.png',
    name: 'React Presto',
    price: 25.99,
    categories: ['all', 'casual']
  },
  {
    img: '/shoes/yellow_1.png',
    name: 'React Presto',
    price: 69.99,
    categories: ['all', 'running']
  },
  {
    img: '/shoes/blue_1.png',
    name: 'React Presto',
    price: 25.99,
    categories: ['all', 'formal']
  },
  {
    img: '/shoes/red_1.png',
    name: 'React Presto',
    price: 25.99,
    categories: ['all', 'sneakers']
  },
  {
    img: '/shoes/yellow_1.png',
    name: 'React Presto',
    price: 69.99,
    categories: ['all', 'formal']
  },
  {
    img: '/shoes/blue_1.png',
    name: 'React Presto',
    price: 25.99,
    categories: ['all', 'sneakers']
  }
];

export const GET: RequestHandler = async ({ url }) => {
  const category = await url.searchParams.get('category');

  const filtered = PRODUCTS.filter((product) => {
    return product.categories.includes(category);
  });

  return new Response(JSON.stringify(filtered), {
    status: 200
  });
};
