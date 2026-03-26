import { createContext } from 'react';
import { EmacsVariables } from '../components/GraphPage';

const VariablesContext = createContext<EmacsVariables>({
  subDirs: ['dailies', '.attach'],
  attachDir: '.attach',
  useInheritance: false,
  roamDir: '~/org',
  dailyDir: 'dailies',
});
export { VariablesContext };
