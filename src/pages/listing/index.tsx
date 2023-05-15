import { Card, Col, Grid, Text, Title } from '@mantine/core';
import Link from 'next/link';

const SelectType = () => {
  return (
    <>
      <Title order={2} align="center">
        What do you want to sell?
      </Title>
      <Text align="center">Select a property type below to begin.</Text>
      <Grid columns={24} mt={32}>
        <Col sm={8}>
          <Link href="/listing/house">
            <Card radius={16} withBorder shadow="md">
              <Text weight={600} align="center">
                House
              </Text>
            </Card>
          </Link>
        </Col>
        <Col sm={8}>
          <Link href="/listing/apartment">
            <Card radius={16} withBorder shadow="md">
              <Text weight={600} align="center">
                Apartment
              </Text>
            </Card>
          </Link>
        </Col>
        <Col sm={8}>
          <Link href="/listing/condo">
            <Card radius={16} withBorder shadow="md">
              <Text weight={600} align="center">
                Condo
              </Text>
            </Card>
          </Link>
        </Col>
      </Grid>
    </>
  );
};

export default SelectType;
