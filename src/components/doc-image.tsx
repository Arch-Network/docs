'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface DocImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: string;
  height?: string;
}

export function DocImage({ lightSrc, darkSrc, alt, width = '100%', height = 'auto' }: DocImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Während des SSR oder vor dem Mount, zeige das Light-Bild
  const imageSrc = mounted && resolvedTheme === 'dark' ? darkSrc : lightSrc;

  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      style={{ width, height, display: 'block' }} 
    />
  );
}

