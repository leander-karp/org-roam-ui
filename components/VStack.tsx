import { styled } from '@linaria/react';
import React, { ReactNode } from 'react';

const VStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const VStackDivider = styled.div`
  border-top: 1px solid var(--theme-color-gray-500);
`;

const VStack = ({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: any;
  className?: string;
}) => (
  <VStackContainer style={style} className={className}>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={index}>
        {index > 0 && <VStackDivider />}
        {child}
      </React.Fragment>
    ))}
  </VStackContainer>
);

export default VStack;
