import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

import { PRODUCTS } from '../../../../lib/server/const/products.const';

export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;

  if (!id) throw error(500, 'Bad Request');

  const product = PRODUCTS.find((el, index) => index === parseInt(id));

  if (!product) throw error(404, 'Not Found');

  return new Response(JSON.stringify(product), {
    status: 200
  });
};
