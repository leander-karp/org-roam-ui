import { OrgRoamNode } from '../../api';
import { initialColoring, initialVisuals } from '../config';
import { LinksByNodeId } from '../GraphPage';
import { getNodeColorById } from './getNodeColorById';
import { getThemeColor } from '../../util/getThemeColor';

export const getNodeColor = ({
  node,
  theme,
  highlightedNodes,
  previouslyHighlightedNodes,
  visuals,
  tagColors,
  highlightColors,
  opacity,
  emacsNodeId,
  linksByNodeId,
  cluster,
  coloring,
}: {
  node: OrgRoamNode;
  theme: any;
  visuals: typeof initialVisuals;
  highlightedNodes: Record<string, any>;
  previouslyHighlightedNodes: Record<string, any>;
  tagColors: Record<string, any>;
  highlightColors: Record<string, any>;
  opacity: number;
  emacsNodeId: string | null;
  linksByNodeId: LinksByNodeId;
  cluster: any;
  coloring: typeof initialColoring;
}) => {
  let nodeColor;

  const needsHighlighting =
    highlightedNodes[node.id!] || previouslyHighlightedNodes[node.id!];
  //const needsHighlighting = hoverNode?.id === node.id! || lastHoverNode?.current?.id === node.id
  // if we are matching the node color and don't have a highlight color
  // or we don't have our own scheme and we're not being highlighted
  if (visuals.emacsNodeColor && node.id === emacsNodeId) {
    nodeColor = getThemeColor(visuals.emacsNodeColor, theme);
  } else if (tagColors && node?.tags.some((tag) => tagColors[tag])) {
    const tagColor = tagColors[node?.tags.filter((tag) => tagColors[tag])[0]];
    nodeColor = needsHighlighting
      ? highlightColors[tagColor][tagColor](visuals.highlightFade * opacity)
      : highlightColors[tagColor][visuals.backgroundColor](
          visuals.highlightFade * opacity
        );
  } else if (
    visuals.citeNodeColor &&
    node?.properties?.ROAM_REFS &&
    node?.properties?.FILELESS
  ) {
    nodeColor = needsHighlighting
      ? getThemeColor(visuals.citeNodeColor, theme)
      : highlightColors[visuals.citeNodeColor][visuals.backgroundColor](
          visuals.highlightFade * opacity
        );
  } else if (visuals.refNodeColor && node.properties.ROAM_REFS) {
    nodeColor = needsHighlighting
      ? getThemeColor(visuals.refNodeColor, theme)
      : highlightColors[visuals.refNodeColor][visuals.backgroundColor](
          visuals.highlightFade * opacity
        );
  } else if (!needsHighlighting) {
    nodeColor = highlightColors[
      getNodeColorById({
        id: node.id as string,
        cluster,
        coloring,
        linksByNodeId,
        visuals,
      })
    ][visuals.backgroundColor](visuals.highlightFade * opacity);
  } else if (visuals.highlight) {
    nodeColor =
      highlightColors[
        getNodeColorById({
          id: node.id as string,
          cluster,
          coloring,
          linksByNodeId,
          visuals,
        })
      ][visuals.highlightColor](opacity);
  } else {
    nodeColor = getThemeColor(
      getNodeColorById({
        id: node.id as string,
        cluster,
        coloring,
        linksByNodeId,
        visuals,
      }),
      theme
    );
  }

  return nodeColor;
};
