import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default AppWrapper;
