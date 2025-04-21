import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import { OrgRoamNode } from '../../api';
export interface TitleProps {
  previewNode: OrgRoamNode | undefined;
}

export const Title = ({ previewNode }: TitleProps) => (
  <Flex maxW="90%">
    <Heading lineHeight={1.2} size="md" fontWeight={600} pt={4}>
      {previewNode?.title}
    </Heading>
  </Flex>
);
