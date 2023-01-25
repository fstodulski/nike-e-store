import type { ServerLoad } from '@sveltejs/kit';

import { ServerHttpClientProvider } from '../lib/core/providers/server-http-client.provider';

export const load: ServerLoad = async ({ url }) => {
  const category = url.searchParams.get('category');

  const categories = await ServerHttpClientProvider.get('/api/categories');
  const products = await ServerHttpClientProvider.get('/api/products', {
    params: {
      category
    }
  });

  return {
    categories: categories.data || [],
    products: products.data || []
  };
};
