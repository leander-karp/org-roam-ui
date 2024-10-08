import React from 'react';
import Image from 'next/image';
import path from 'path';
import { Container } from '@chakra-ui/react';

export interface OrgImageProps {
  src: string;
  file: string;
}

export const OrgImage = ({ src, file }: OrgImageProps) => {
  // const [image, setImage] = useState<any>(null)

  /* )
*   .then((res) => res.blob())
*   .then((res) => setImage(res))
*   .catch((e) => {
*     setImage(null)
*     console.error(e)
*   })
}, [fullPath]) */

  const dumbLoader = ({ src }: { [key: string]: string | number }) => {
    return `${src}`;
  };

  if (src.replaceAll(/(http)?.*/g, '$1')) {
    console.log(src.replaceAll(/(http)?.*/g, '$1'));
    return (
      <Image
        layout="responsive"
        loader={dumbLoader}
        src={src}
        alt=""
        style={{ width: 'auto', height: 'auto' }}
      />
    );
  }

  const srcName = src.replaceAll(/file:/g, '');

  const dir = path.dirname(file);
  const fullPath =
    path.isAbsolute(srcName) || srcName.slice(0, 1) === '~'
      ? srcName
      : path.join(dir, srcName);
  const encodedPath = encodeURIComponent(encodeURIComponent(fullPath));

  return (
    <Container my={4} position="relative">
      <img
        alt="Wow, an image."
        src={`http://localhost:35901/img/${encodedPath}`}
      />
    </Container>
  );
};
