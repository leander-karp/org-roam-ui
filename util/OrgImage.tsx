import React from 'react';
import { css } from '@linaria/core';

export interface OrgImageProps {
  src: string;
  file: string;
}

const dirname = (path: string) => {
  const lastSeparatorIndex = path.lastIndexOf('/');

  if (lastSeparatorIndex === -1) {
    throw new Error(`Not a directory: ${path}`);
  }

  return path.substring(0, lastSeparatorIndex);
};

const getSource = (src: string, file: string): string => {
  if (!src.startsWith('http:') && !src.startsWith('https:')) {
    if (src.startsWith('file:')) {
      src = src.replace('file:', '');
    }
    const isAbsolute = src.startsWith('/');

    if (src.startsWith('./')) {
      // relative source
      src = src.replace('./', '');
    }

    if (!isAbsolute) {
      const dir = dirname(file);
      src = `${dir}/${src}`;
    }

    src = `http://localhost:35901/img/${encodeURIComponent(src)}`;
  }

  return src;
};

const OrgImageClass = css`
  margin: 1rem auto 1rem auto;
  position: relative;
  max-width: 60ch;
  width: auto;
  height: auto;
`;

export const OrgImage = ({ src, file }: OrgImageProps) => (
  <img
    alt="Failed to load image!"
    src={getSource(src, file)}
    className={OrgImageClass}
  />
);
