import type { BannerType } from '../../../../components/Banner/banner.model';

export const BANNERS: Array<BannerType> = [
  {
    title: `<span class="text-3xl font-bold">20%</span> Discount`,
    subTitle: 'on your first purchase',
    img: '/shoes/green_1.png',
    cta: {
      label: 'Shop now',
      link: '/products'
    }
  },
  {
    title: `<span class="text-3xl font-bold">10%</span> Discount`,
    subTitle: 'on your first purchase',
    img: '/shoes/yellow_1.png',
    cta: {
      label: 'Shop now',
      link: '/products'
    }
  },
  {
    title: `<span class="text-3xl font-bold">4%</span> Discount`,
    subTitle: 'on your first purchase',
    img: '/shoes/red_1.png',
    cta: {
      label: 'Shop now',
      link: '/products'
    }
  }
];
