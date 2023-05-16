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
import { parseEther } from 'viem';
import { useAccount, useSignTypedData } from 'wagmi';

interface IMintData {
  lister: string;
  price: string;
  uri: string;
  nonce: string;
  signature: string;
}

const domain = {
  name: 'Test Estate Contract',
  version: '1.0.0',
  chainId: 31337,
  verifyingContract: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const;

// The named list of all type definitions
const types = {
  NFTForSale: [
    { name: 'lister', type: 'address' },
    { name: 'price', type: 'uint256' },
    { name: 'uri', type: 'string' },
    { name: 'nonce', type: 'uint256' },
  ],
} as const;

const Listing = ({ data }: { data: IMintData[] }) => {
  const nonce = BigInt(data.length + 1);
  const { address } = useAccount();
  const { data: signData, signTypedDataAsync } = useSignTypedData({
    domain,
    types,
    primaryType: 'NFTForSale',
    message: {
      price: parseEther('1000'),
      uri: 'https://example.com/0',
      lister: address as `0x${string}`,
      nonce,
    },
  });

  const handleSign = async () => {
    try {
      await signTypedDataAsync();
      const response = await fetch('/api/storage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lister: address,
          price: parseEther('1000').toString(),
          uri: 'http://example.com',
          nonce: nonce.toString(),
          signature: signData,
        }),
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button radius={8} px={32} onClick={handleSign}>
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

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/storage', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};
