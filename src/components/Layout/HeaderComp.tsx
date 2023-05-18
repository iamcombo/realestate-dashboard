import {
  Burger,
  Container,
  Flex,
  Group,
  Header,
  MediaQuery,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import Link from 'next/link';

import DrawerComp from './DrawerComp';

const HeaderComp = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header height={60} p="xs">
      <Container size={1900}>
        <Flex justify="space-between">
          <Link href="/">
            <Group>
              <Image alt="" src="/logo.png" width={40} height={40} />
              <Title order={4}>Realestate INC.</Title>
            </Group>
          </Link>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <div>
              <ConnectButton />
            </div>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={toggle} />
          </MediaQuery>
        </Flex>
        <DrawerComp opened={opened} close={toggle} />
      </Container>
    </Header>
  );
};

export default HeaderComp;
