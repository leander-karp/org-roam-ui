import React from 'react';
import { initialFilter, TagColors } from '../config';
import Switch from './Switch';
import VStack from './VStack';

export interface FilterPanelProps {
  filter: typeof initialFilter;
  setFilter: any;
  tagColors: TagColors;
  setTagColors: any;
}

const FilterPanel = ({
  filter,
  setFilter,
  tagColors,
  setTagColors,
}: FilterPanelProps) => (
  <VStack
  /*spacing={2}
    justifyContent="flex-start"
    divider={<StackDivider borderColor="gray.500" />}
    align="stretch"
    paddingLeft={7}
    color="gray.800"*/
  >
    <Switch
      onChange={() => {
        setFilter((curr: typeof initialFilter) => {
          return { ...curr, orphans: !curr.orphans };
        });
      }}
      checked={filter.orphans}
      id="filter-orphans"
      description="Orphans"
    />
    <Switch
      onChange={() => {
        setFilter((curr: typeof initialFilter) => {
          return { ...curr, dailies: !curr.dailies };
        });
      }}
      checked={filter.dailies}
      id="filter-dailies"
      description="Dailies"
    />
    <Switch
      onChange={() => {
        setFilter((curr: typeof initialFilter) => {
          return { ...curr, noter: !curr.noter };
        });
      }}
      checked={filter.noter}
      id="filter-noter-pages"
      description="Org-Noter pages"
    />
    <Switch
      onChange={() => {
        setFilter({ ...filter, filelessCites: !filter.filelessCites });
      }}
      checked={filter.filelessCites}
      id="filter-fileless-citations"
      description="Citations without note files"
    />
    <Switch
      onChange={() => {
        setTagColors({ ...tagColors, bad: 'white' });
        setFilter({ ...filter, bad: !filter.bad });
      }}
      checked={filter.bad}
      description="Non-existent nodes"
      id="filter-non-existent-nodes"
    />
  </VStack>
);

export default FilterPanel;
