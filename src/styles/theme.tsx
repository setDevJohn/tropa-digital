import { ThemeProvider } from 'styled-components';

import type { ReactNode } from 'react';

export interface IVariables {
  primaryColor: string;
  secondaryColor: string;
  inputBackground: string;
  lightColorFont: string;
  primaryFont: string;
  secondaryFont: string;
  title: string;
  subtitle: string;
  bigSize: string;
  menuSize: string;
  normalSize: string;
  smallSize: string;
  verySmallSize: string;
}

const variables: IVariables = {
  primaryColor: '#CC6237',
  secondaryColor: '#394b54',
  inputBackground: '#F6F6F6',
  lightColorFont: '#657593',
  primaryFont: '"Inter", sans-serif',
  secondaryFont: '"Poppins", sans-serif',
  title: '26px',
  subtitle: '20px',
  bigSize: '16px',
  menuSize: '14px',
  normalSize: '13px',
  smallSize: '12px',
  verySmallSize: '11px',
};

type ThemeProviderProps = { children: ReactNode };

const ThemeStyleProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={variables}>
      {children}
    </ThemeProvider>
  );
};

export { ThemeStyleProvider };
