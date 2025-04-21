import { Link, Text, useTheme } from '@chakra-ui/react';
import React, { useContext } from 'react';
import 'katex/dist/katex.css';
import { ThemeContext } from '../../util/themecontext';
import { NodeByCite, NodeById } from '../Home';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { getThemeColor } from '../../util/getThemeColor';

export interface LinkProps {
  href: any;
  children: any;
  setPreviewNode: any;
  setSidebarHighlightedNode: any;
  nodeByCite: NodeByCite;
  nodeById: NodeById;
  openContextMenu: any;
  isWiki?: boolean;
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
  isWiki?: boolean;
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
  isWiki,
}: NodeLinkProps) => {
  const { highlightColor } = useContext(ThemeContext);

  const theme = useTheme();
  const coolHighlightColor = getThemeColor(highlightColor, theme);
  const uri = href.replaceAll(/.*?:(.*)/g, '$1');
  const ID = id ?? uri;
  const linkText = isWiki ? `[[${children}]]` : children;
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
      {linkText}
    </Text>
  );
};

const NormalLink = (props: NormalLinkProps) => {
  const { href, children } = props;
  const { highlightColor } = useContext(ThemeContext);
  return (
    <Link color={highlightColor} isExternal href={href}>
      {children}
      <ExternalLinkIcon mx="1px" pb="2px" />
    </Link>
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
  isWiki,
}: LinkProps) => {
  // TODO figure out how to properly type this
  // see https://github.com/rehypejs/rehype-react/issues/25
  const type = href.replaceAll(/(.*?):.*/g, '$1');

  if (!type) {
    return <Text color="gray.700">{children}</Text>;
  }

  if (type.replaceAll(/(http)?.*/g, '$1')) {
    return <NormalLink href={href}>{children}</NormalLink>;
  }

  const uri = href.replaceAll(/.*?:(.*)/g, '$1');
  const getId = (type: string, uri: string) => {
    if (type === 'id') {
      return uri;
    }

    if (type.includes('cite')) {
      const node = nodeByCite[uri] ?? false;
      if (!node) {
        return '';
      }
      if (node?.properties.FILELESS) {
        return '';
      }
      return node?.id;
    }
    return '';
  };

  const id = getId(type, uri);

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
          isWiki,
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
