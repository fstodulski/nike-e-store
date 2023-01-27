import type { ServerLoad } from '@sveltejs/kit';

import { ServerHttpClientProvider } from '../../../lib/core/providers/server-http-client.provider';

export const load: ServerLoad = async ({ params }) => {
  const res = await ServerHttpClientProvider.get(`/products/${params.id}`);

  return {
    product: res.data || {}
  };
};
