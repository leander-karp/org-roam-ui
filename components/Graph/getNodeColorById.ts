import { initialColoring, initialVisuals } from '../config';
import { LinksByNodeId } from '../GraphPage';

export const getNodeColorById = ({
  id,
  linksByNodeId,
  visuals,
  coloring,
  cluster,
}: {
  id: string;
  linksByNodeId: LinksByNodeId;
  visuals: typeof initialVisuals;
  cluster: any;
  coloring: typeof initialColoring;
}) => {
  const linkLength = linksByNodeId[id]?.length ?? 0;
  const index =
    coloring.method === 'degree'
      ? Math.min(linkLength, visuals.nodeColorScheme.length - 1)
      : linkLength && cluster[id] % visuals.nodeColorScheme.length;

  return visuals.nodeColorScheme[index];
};
