import {
  StackDivider,
  VStack,
  Switch,
} from '@chakra-ui/react';
import React from 'react';
import { initialFilter, TagColors } from '../config';

export interface FilterPanelProps {
  filter: typeof initialFilter;
  setFilter: any;
  tagColors: TagColors;
  setTagColors: any;
}

const Flex = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {children}
  </div>
);

const FilterPanel = ({
  filter,
  setFilter,
  tagColors,
  setTagColors,
}: FilterPanelProps) => (
  <VStack
    spacing={2}
    justifyContent="flex-start"
    divider={<StackDivider borderColor="gray.500" />}
    align="stretch"
    paddingLeft={7}
    color="gray.800"
  >
    <Flex>
      <p>Orphans</p>
      <Switch
        onChange={() => {
          setFilter((curr: typeof initialFilter) => {
            return { ...curr, orphans: !curr.orphans };
          });
        }}
        isChecked={filter.orphans}
      ></Switch>
    </Flex>
    <Flex >
      <p>Dailies</p>
      <Switch
        onChange={() => {
          setFilter((curr: typeof initialFilter) => {
            return { ...curr, dailies: !curr.dailies };
          });
        }}
        isChecked={filter.dailies}
      ></Switch>
    </Flex>
    <Flex >
      <p>Org-noter pages</p>
      <Switch
        onChange={() => {
          setFilter((curr: typeof initialFilter) => {
            return { ...curr, noter: !curr.noter };
          });
        }}
        isChecked={filter.noter}
      ></Switch>
    </Flex>
    <Flex>
      <p>Citations without note files</p>
      <Switch
        onChange={() => {
          setFilter({ ...filter, filelessCites: !filter.filelessCites });
        }}
        isChecked={filter.filelessCites}
      ></Switch>
    </Flex>
    <Flex>
      <p>Non-existent nodes</p>
      <Switch
        onChange={() => {
          setTagColors({ ...tagColors, bad: 'white' });
          setFilter({ ...filter, bad: !filter.bad });
        }}
        isChecked={filter.bad}
      ></Switch>
    </Flex>
  </VStack>
);

export default FilterPanel;
