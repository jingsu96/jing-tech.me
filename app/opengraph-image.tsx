import { ImageResponse } from 'next/og';

import { OpenGraphImage } from '@/components/lab/og-image';
import { getRegularFont, getBoldFont } from '@/lib/fonts';
import { sharedMetadata } from './shared-metadata';
import { Logo } from './logo';

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

export default async function Image() {
  const [regularFontData, boldFontData] = await Promise.all([getRegularFont(), getBoldFont()]);

  return new ImageResponse(
    <OpenGraphImage title={sharedMetadata.title} description={sharedMetadata.description} icon={<Logo />} />,
    {
      ...size,
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
    }
  );
}
