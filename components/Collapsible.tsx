import { styled } from '@linaria/react';

export const Collapsible = styled.div<{ isOpen: boolean }>`
  transition:
    opacity 0.3s ease-in-out,
    display 0.3s allow-discrete;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  height: 100vh;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
 
  @starting-style {
    & {
      opacity: 0;
    }
  }
`;
