import 'styled-components';
import type { IVariables } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IVariables {}
}
