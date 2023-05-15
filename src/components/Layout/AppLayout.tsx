import { AppShell, Container } from '@mantine/core';
import type { ReactNode } from 'react';

import HeaderComp from './HeaderComp';
import NavbarComp from './NavbarComp';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      navbar={<NavbarComp />}
      header={<HeaderComp />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container size={1280} my={32}>
        {children}
      </Container>
    </AppShell>
  );
};

export default AppLayout;
