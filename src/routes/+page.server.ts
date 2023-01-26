import type { ServerLoad } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { ServerHttpClientProvider } from '../lib/core/providers/server-http-client.provider';

export const load: ServerLoad = async ({ url }) => {
  const category = url.searchParams.get('category');

  const categories = await ServerHttpClientProvider.get('/categories');
  const products = await ServerHttpClientProvider.get('/products', {
    params: {
      category
    }
  });

  if (!category) {
    throw redirect(301, '?category=all');
  }

  return {
    categories: categories.data || [],
    products: products.data || []
  };
};
