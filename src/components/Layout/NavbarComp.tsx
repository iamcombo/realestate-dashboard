import {
  Group,
  Navbar,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core';
import {
  IconHome2,
  IconSquareRoundedPlus,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  mainLink: {
    padding: '8px 24px',
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));

const NavbarComp = () => {
  const { classes } = useStyles();

  return (
    <Navbar width={{ base: 280 }} height="100%">
      <Stack spacing={8} mt={24}>
        <Link href="/">
          <Group className={classes.mainLink}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconHome2 />
            </ThemeIcon>
            <Text fw={500}>Dashboard</Text>
          </Group>
        </Link>
        <Link href="/listing">
          <Group className={classes.mainLink}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconSquareRoundedPlus />
            </ThemeIcon>
            <Text fw={500}>List property</Text>
          </Group>
        </Link>
        <Link href="/profile">
          <Group className={classes.mainLink}>
            <ThemeIcon variant="light" size={40} radius={8}>
              <IconUser />
            </ThemeIcon>
            <Text fw={500}>Profile</Text>
          </Group>
        </Link>
      </Stack>
    </Navbar>
  );
};

export default NavbarComp;
