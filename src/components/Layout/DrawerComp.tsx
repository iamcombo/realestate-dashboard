import {
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconHome2,
  IconSquareRoundedPlus,
  IconUser,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import CustomConnectButton from '../CustomConnectButton';

const DrawerComp = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  return (
    <Drawer size={280} opened={opened} onClose={close} withCloseButton={false}>
      <Group>
        <Image alt="" src="/logo.png" width={40} height={40} />
        <Title order={4}>Realestate INC.</Title>
      </Group>
      <Stack spacing={8} mt={24}>
        <Link href="/">
          <Group my={8} onClick={close}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconHome2 />
            </ThemeIcon>
            <Text fw={500}>Dashboard</Text>
          </Group>
        </Link>
        <Link href="/listing">
          <Group my={8} onClick={close}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconSquareRoundedPlus />
            </ThemeIcon>
            <Text fw={500}>List property</Text>
          </Group>
        </Link>
        <Link href="/profile">
          <Group my={8} onClick={close}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconUser />
            </ThemeIcon>
            <Text fw={500}>Profile</Text>
          </Group>
        </Link>
        <Divider my={8} label="wallet" />
        <Group>
          <CustomConnectButton />
        </Group>
      </Stack>
    </Drawer>
  );
};

export default DrawerComp;
