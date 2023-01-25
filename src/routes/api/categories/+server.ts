import type { RequestHandler } from '@sveltejs/kit';

const PRODUCT_CATEGORIES = ['all', 'running', 'sneakers', 'formal', 'casual'];

export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify(PRODUCT_CATEGORIES), {
    status: 200
  });
};
