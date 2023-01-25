import { z } from 'zod';

const _bannerType = z.object({
  title: z.string(),
  subTitle: z.string(),
  img: z.string(),
  cta: z.object({
    link: z.string(),
    label: z.string()
  })
});

export type BannerType = z.infer<typeof _bannerType>;
