import type { RequestHandler } from '@sveltejs/kit';

import { PRODUCTS } from '$lib/server/const/products.const';

export const GET: RequestHandler = async ({ url }) => {
  const category = await url.searchParams.get('category');

  const filtered = PRODUCTS.filter((product) => {
    return product.categories.includes(category);
  });

  return new Response(JSON.stringify(filtered), {
    status: 200
  });
};
