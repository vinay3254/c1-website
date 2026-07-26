import React from 'react';
import Image, { ImageProps } from 'next/image';

export interface AppImageProps extends ImageProps {
  alt: string;
}

export default function AppImage({ alt, ...props }: AppImageProps) {
  return <Image alt={alt} {...props} />;
}
