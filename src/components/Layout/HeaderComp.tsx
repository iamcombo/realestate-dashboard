import { Container, Group, Header } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const HeaderComp = () => {
  return (
    <Header height={60} p="xs">
      <Container size={1280}>
        {/* Header content */}
        <Group position="right">
          <ConnectButton />
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderComp;
