import {
  Avatar,
  Button,
  Card,
  Col,
  Flex,
  Grid,
  Group,
  Space,
  Text,
} from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';

import { CardFeature } from '@/components/Card';

const Profile = () => {
  return (
    <Grid columns={24} gutterMd={40}>
      <Col md={6}>
        <Card radius={16} shadow="sm" p={24}>
          <Group position="center" mb={16}>
            <Avatar
              alt=""
              src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
              size="xl"
              radius={100}
            />
          </Group>
          <Text fw={800} align="center">
            Jonh Wick
          </Text>
          <Text fz={14} fw={600} c="orange" align="center">
            SALE AGENT
          </Text>
          <Flex justify="center" align="center" my={8}>
            <IconMapPinFilled size={14} />
            <Text ml={8} fz={10}>
              St.828 Casimir Cove, South Carolina, Montgomery
            </Text>
          </Flex>
          <Text fz={16} fw={600} align="center">
            25 Properties
          </Text>
          <Button fullWidth size="md" radius={8} mt={16}>
            Contact
          </Button>
        </Card>
      </Col>
      <Col md={18}>
        <Text fw={800} mb={16}>
          Properties
        </Text>
        <CardFeature />
        <Space h={8} />
        <CardFeature />
      </Col>
    </Grid>
  );
};

export default Profile;
