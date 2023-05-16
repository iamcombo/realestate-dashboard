import { Container, Flex, Group, Header, Title } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

const HeaderComp = () => {
  return (
    <Header height={60} p="xs">
      <Container size={1280} m={0}>
        {/* Header content */}
        <Flex justify="space-between">
          <Group>
            <Image alt="" src="/logo.png" width={40} height={40} />
            <Title order={4}>Realestate INC.</Title>
          </Group>
          <ConnectButton />
        </Flex>
      </Container>
    </Header>
  );
};

export default HeaderComp;
