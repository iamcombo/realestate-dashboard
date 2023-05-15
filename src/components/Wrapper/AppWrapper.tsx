import { MantineProvider } from '@mantine/core';
import { Raleway } from 'next/font/google';
import type { CSSProperties, ReactNode } from 'react';
import AppLayout from '../Layout/AppLayout';
import RainbowKitWrapper from './RainbowKitWrapper';

const raleway: unknown = Raleway({ subsets: ['latin'] });

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        fontFamily: raleway as CSSProperties['fontFamily'],
        colors: {
          slate: [
            '#f8fafc',
            '#f1f5f9',
            '#e2e8f0',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
            '#475569',
            '#334155',
            '#1e293b',
            '#0f172a',
          ],
        },
      }}
    >
      <RainbowKitWrapper>
        <AppLayout>{children}</AppLayout>
      </RainbowKitWrapper>
    </MantineProvider>
  );
};

export default AppWrapper;
