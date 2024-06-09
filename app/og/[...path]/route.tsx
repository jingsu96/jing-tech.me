import { ImageResponse } from 'next/og';

import { OpenGraphImage } from '@/components/lab/og-image';
import { getRegularFont, getBoldFont } from '@/lib/fonts';
import { sharedMetadata } from 'app/shared-metadata';
import { Logo } from 'app/logo';
import { generateMetadata } from 'app/writing/[...slug]/page';

export const alt = sharedMetadata.title;
export const size = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height,
};
export const contentType = sharedMetadata.ogImage.type;

/* export const getImage = async () => {
  const response = await fetch(new URL('@/assets/me.jpg', import.meta.url))
  const font = await response.arrayBuffer()
  return font
} */

export async function GET(_, { params }) {
  params = [...params.path.slice(0, params.path.length - 1), params.path[params.path.length - 1].split('.png')?.[0]];
  const [seoData, regularFontData, boldFontData] = await Promise.all([
    generateMetadata({ params: { slug: params } }),
    getRegularFont(),
    getBoldFont(),
  ]);

  if (!seoData) return null;

  const { title, description } = seoData;

  return new ImageResponse(<OpenGraphImage title={title || ''} description={description || ''} icon={<Logo />} />, {
    ...(size as any),
    fonts: [
      {
        name: 'Geist Sans',
        data: regularFontData,
        style: 'normal',
        weight: 400,
      },
      {
        name: 'Geist Sans',
        data: boldFontData,
        style: 'normal',
        weight: 500,
      },
    ],
  });
}
