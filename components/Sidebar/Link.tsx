import { Text, useTheme } from '@chakra-ui/react';
import React, { useContext } from 'react';
import 'katex/dist/katex.css';
import { ThemeContext } from '../../util/themecontext';
import { NodeByCite, NodeById } from '../Home';
import { getThemeColor } from '../../util/getThemeColor';
import { colorToCSSVarMap } from '../themes2';
import { styled } from '@linaria/react';

export interface LinkProps {
  href: any;
  children: any;
  setPreviewNode: any;
  setSidebarHighlightedNode: any;
  nodeByCite: NodeByCite;
  nodeById: NodeById;
  openContextMenu: any;
  noUnderline?: boolean;
}

interface NodeLinkProps {
  setPreviewNode: any;
  nodeById: NodeById;
  nodeByCite: NodeByCite;
  href: any;
  children: any;
  setSidebarHighlightedNode: any;
  openContextMenu: any;
  noUnderline?: boolean;
  id?: string;
}

interface NormalLinkProps {
  href: string;
  children: string;
}

const NodeLink = ({
  noUnderline,
  id,
  setSidebarHighlightedNode,
  setPreviewNode,
  nodeById,
  openContextMenu,
  href,
  children,
}: NodeLinkProps) => {
  const { highlightColor } = useContext(ThemeContext);

  const theme = useTheme();
  const coolHighlightColor = getThemeColor(highlightColor, theme);
  const uri = href.replaceAll(/.*?:(.*)/g, '$1');
  const ID = id ?? uri;
  return (
    <Text
      as="a"
      onMouseEnter={() => setSidebarHighlightedNode(nodeById[ID])}
      onMouseLeave={() => setSidebarHighlightedNode({})}
      tabIndex={0}
      display="inline"
      overflow="hidden"
      fontWeight={500}
      color={highlightColor}
      textDecoration={noUnderline ? undefined : 'underline'}
      onContextMenu={(e) => {
        e.preventDefault();
        openContextMenu(nodeById[uri], e);
      }}
      onClick={() => setPreviewNode(nodeById[uri])}
      // TODO  don't hardcode the opacitycolor
      _hover={{
        textDecoration: 'none',
        cursor: 'pointer',
        bgColor: coolHighlightColor + '22',
      }}
      _focus={{ outlineColor: highlightColor }}
    >
      {children}
    </Text>
  );
};

const StyledLink = styled.a<{ highlightColor: keyof typeof colorToCSSVarMap }>`
  color: ${(props) => colorToCSSVarMap[props.highlightColor]};

  &[href^='http']::after {
    display: inline-block;
    margin-left: 0.25em;
    width: 0.75rem;
    height: 0.75rem;
    content: '';
    background-color: ${props => colorToCSSVarMap[props.highlightColor]};
    mask-size: contain;
    /* SVG taken from react-icons */
    mask: url('data:image/svg+xml;utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" stroke-linecap="round" stroke-width="2"/></svg>') no-repeat center;
  }
`;

const NormalLink = ({ href, children }: NormalLinkProps) => {
  const { highlightColor } = useContext(ThemeContext);
  return (
    <StyledLink
      highlightColor={highlightColor as keyof typeof colorToCSSVarMap}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </StyledLink>
  );
};

export const PreviewLink = ({
  href,
  children,
  nodeById,
  setSidebarHighlightedNode,
  setPreviewNode,
  nodeByCite,
  openContextMenu,
  noUnderline,
}: LinkProps) => {
  // TODO figure out how to properly type this
  // see https://github.com/rehypejs/rehype-react/issues/25
  const [type, uri] = href.split(":");

  if (type.startsWith("http")) {
    return <NormalLink href={href}>{children}</NormalLink>;
  }

  const id = type === 'id' ? uri : nodeByCite[uri]?.id;

  if (id) {
    return (
      <NodeLink
        key={nodeById[id]?.title ?? id}
        {...{
          id,
          setSidebarHighlightedNode,
          setPreviewNode,
          nodeById,
          href,
          children,
          nodeByCite,
          openContextMenu,
          noUnderline,
        }}
      />
    );
  }
  return (
    <Text
      as="span"
      display="inline"
      className={href}
      color="base.700"
      cursor="not-allowed"
    >
      {children}
    </Text>
  );
};
