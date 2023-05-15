import {
  Button,
  Col,
  Grid,
  Group,
  MultiSelect,
  Select,
  SimpleGrid,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { useSignTypedData } from 'wagmi';

const Listing = () => {
  const { data, isLoading, isError, signTypedData } = useSignTypedData({
    // domain,
    // types,
    // primaryType: 'Mail',
    // value: {
    //   ...sale,
    //   lister: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',
    //   nonce: '0',
    // },
  });
  return (
    <Grid columns={24} gutterMd={40}>
      <Col md={14}>
        <Title order={4} mb={8}>
          General Info
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          <Select
            label="Property for"
            placeholder="Please select option"
            data={['Sale', 'Rent', 'Both']}
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Price"
            placeholder="Enter price"
            icon={<IconCurrencyDollar size={16} stroke={1.5} />}
            size="md"
            radius={8}
            variant="filled"
          />
        </SimpleGrid>

        <Title order={4} mt={24} mb={8}>
          Property Detail
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          <TextInput
            label="Title"
            placeholder="Enter title"
            size="md"
            radius={8}
            variant="filled"
          />
          <Textarea
            label="Description"
            placeholder="Enter description"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Bedroom"
            placeholder="Enter bedroom quantity"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Bathroom"
            placeholder="Enter bathroom quantity"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Parking"
            placeholder="Enter parking quantity"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Land Area"
            placeholder="Enter land area"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Floor Area"
            placeholder="Enter floor area"
            size="md"
            radius={8}
            variant="filled"
          />
        </SimpleGrid>

        <Title order={4} mt={24} mb={8}>
          Location
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          <Select
            label="City/Province"
            placeholder="Select city/province"
            data={['Phnom Penh', 'Sihanouk ville']}
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Khan/District"
            placeholder="Enter khan/district"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Sangkat/Commune"
            placeholder="Enter sangkat/commune"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Street name"
            placeholder="Enter street name"
            size="md"
            radius={8}
            variant="filled"
          />
          <TextInput
            label="Street Number"
            placeholder="Enter street number"
            size="md"
            radius={8}
            variant="filled"
          />
        </SimpleGrid>

        <Title order={4} mt={24} mb={8}>
          Feature
        </Title>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          <MultiSelect
            label="Amenities"
            placeholder="Please select amenities"
            data={[]}
            size="md"
            radius={8}
            variant="filled"
          />
          <MultiSelect
            label="Property feature"
            placeholder="Please select property feature"
            data={[]}
            size="md"
            radius={8}
            variant="filled"
          />
          <MultiSelect
            label="Security"
            placeholder="Please select security"
            data={[]}
            size="md"
            radius={8}
            variant="filled"
          />
          <MultiSelect
            label="Views"
            placeholder="Please select views"
            data={[]}
            size="md"
            radius={8}
            variant="filled"
          />
        </SimpleGrid>

        <Title order={4} mt={24} mb={8}>
          Image
        </Title>
        <Title order={4} mt={24} mb={8}>
          Video & VR
        </Title>
        <Group position="right">
          <Button radius={8} px={32}>
            List Property
          </Button>
        </Group>
      </Col>
      <Col md={10}>
        <Title order={4} mt={24} mb={8}>
          Listing preview
        </Title>
      </Col>
    </Grid>
  );
};

export default Listing;
