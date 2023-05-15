import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Image,
  Text,
} from '@mantine/core';
import {
  IconAffiliate,
  IconBath,
  IconBed,
  IconBoxModel2,
  IconHeart,
  IconUsers,
} from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { useRef } from 'react';

const CardFeature = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Card shadow="sm" radius={16}>
      <Grid columns={24}>
        <Col md={10}>
          <Carousel
            withIndicators
            withControls={false}
            plugins={[autoplay.current]}
          >
            <Carousel.Slide>
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                radius={8}
                fit="cover"
                height={180}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                radius={8}
                fit="cover"
                height={180}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                radius={8}
                fit="cover"
                height={180}
              />
            </Carousel.Slide>
          </Carousel>
        </Col>
        <Col md={14}>
          <Group position="apart" mb={16}>
            <Group spacing={4}>
              <Badge leftSection={<IconAffiliate size={10} />}>4 Network</Badge>
              <Badge color="orange" leftSection={<IconUsers size={10} />}>
                Family
              </Badge>
            </Group>
            <IconHeart stroke={1.5} />
          </Group>
          <Text weight="bold" truncate>
            St.57062 Halvorson Cliffs, Washington, North Bethesda
          </Text>
          <Text c="blue" fw="bold" fz="sm" my={8}>
            $407259.00 USD
          </Text>
          <Group spacing={8}>
            <Group spacing={4} align="center">
              <IconBath size={14} stroke={1.5} color="blue" />
              <Text fz={14} fw={500} color="dimmed">
                2 bathroom
              </Text>
            </Group>
            <Group spacing={4} align="center">
              <IconBed size={14} stroke={1.5} color="blue" />
              <Text fz={14} fw={500} color="dimmed">
                2 bedroom
              </Text>
            </Group>
            <Group spacing={4} align="center">
              <IconBoxModel2 size={14} stroke={1.5} color="blue" />
              <Text fz={14} fw={500} color="dimmed">
                1200 sq m²
              </Text>
            </Group>
          </Group>
          <Group mt={24} position="apart">
            <Text fz={12} c="dimmed">
              Listing provided by combo
            </Text>
            <Link href="/property/1">
              <Button radius={8}>View detail</Button>
            </Link>
          </Group>
        </Col>
      </Grid>
    </Card>
  );
};

export default CardFeature;
