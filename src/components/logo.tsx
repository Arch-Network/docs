'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="/arch-logo.svg"
        alt="Arch Network Logo"
        width={100}
        height={25}
      />
    );
  }

  return (
    <Image
      src={resolvedTheme === 'dark' ? '/arch-logo-dark.svg' : '/arch-logo.svg'}
      alt="Arch Network Logo"
      width={100}
      height={25}
    />
  );
}
