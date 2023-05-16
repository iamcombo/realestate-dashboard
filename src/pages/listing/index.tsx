import { Card, Center, Col, Grid, Image, Text, Title } from '@mantine/core';
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
              <Center mb={16}>
                <Image
                  alt=""
                  src="https://realestate-marketplace-tau.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhouse.65c2e6ce.png&w=64&q=75"
                  height={64}
                  width={64}
                />
              </Center>
              <Text weight={600} align="center">
                House
              </Text>
            </Card>
          </Link>
        </Col>
        <Col sm={8}>
          <Link href="/listing/apartment">
            <Card radius={16} withBorder shadow="md">
              <Center mb={16}>
                <Image
                  alt=""
                  src="https://realestate-marketplace-tau.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapartment.85015ffa.png&w=64&q=75"
                  height={64}
                  width={64}
                />
              </Center>
              <Text weight={600} align="center">
                Apartment
              </Text>
            </Card>
          </Link>
        </Col>
        <Col sm={8}>
          <Link href="/listing/condo">
            <Card radius={16} withBorder shadow="md">
              <Center mb={16}>
                <Image
                  alt=""
                  src="https://realestate-marketplace-tau.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcondo.7cf82f1c.png&w=64&q=75"
                  height={64}
                  width={64}
                />
              </Center>
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
