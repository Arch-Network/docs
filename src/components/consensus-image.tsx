'use client';

export function ConsensusImage() {
  return (
    <picture>
      <source srcSet="/Consensus-dark.svg" media="(prefers-color-scheme: dark)" />
      <img src="/Consensus-light.svg" alt="Arch Consensus Overview" style={{ width: '100%', height: 'auto' }} />
    </picture>
  );
}

