import { CONTRACT } from '@/constants/ESTATE_CONTRACT';
import connectContract from '@/utils/connectContract';
import {
  Button,
  Card,
  Col,
  Grid,
  Group,
  MultiSelect,
  Select,
  SimpleGrid,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCurrencyDollar, IconPhotoUp } from '@tabler/icons-react';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useAccount } from 'wagmi';

interface IMintData {
  lister: string;
  price: string;
  uri: string;
  nonce: string;
  signature: string;
}

const Listing = ({ data }: { data: IMintData[] }) => {
  const [price, setPrice] = useState<string>('0');
  const [nonce, setNonce] = useState<number>(data.length + 1);

  const { address } = useAccount();
  // const {
  //   data: signData,
  //   signTypedDataAsync,
  //   isSuccess,
  // } = useSignTypedData({
  //   domain,
  //   types,
  //   value: {
  //     price: parseEther(price as unknown as `${number}`),
  //     uri: 'https://example.com/0',
  //     lister: address as `0x${string}`,
  //     nonce: BigInt(nonce),
  //   },
  // } as any);

  // const rs = walletClient.signTypedData({
  //   domain,
  //   types,
  //   message: {
  //     price: parseEther(price as unknown as `${number}`),
  //     uri: 'https://example.com/0',
  //     lister: address as `0x${string}`,
  //     nonce: BigInt(nonce),
  //   },
  //   account: address as `0x${string}`,
  //   primaryType: 'NFTForSale',
  // });
  const value = {
    price,
    uri: 'https://example.com',
    lister: address,
    nonce,
  };

  const handleSign = async () => {
    try {
      const { ethereum } = window;
      const Provider = new ethers.providers.Web3Provider(ethereum as object);
      const signer = Provider.getSigner();

      const { Contract } = connectContract(CONTRACT.address, CONTRACT.ABI);
      if (!Contract) return;
      const hash = await Contract._hashNFTSale(
        address,
        value.price,
        value.uri,
        nonce
      );
      const sig = await signer.signMessage(ethers.utils.arrayify(hash));

      // { ...sale, lister: this.accounts[1].address, nonce }
      // const signData = await signer._signTypedData(domain, types, value);
      // console.log(signData);

      // const isValid = await ethers.utils.verifyTypedData(
      //   domain,
      //   types,
      //   value,
      //   signData
      // );
      // console.log(isValid);

      const response = await fetch('/api/storage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lister: address,
          price: value.price,
          uri: value.uri,
          nonce,
          signature: sig,
        }),
      });
      const res = await response.json();
      notifications.show({
        title: 'Notification',
        message: res.message,
        color: 'green',
      });
      setNonce(nonce + 1);
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        <Card radius={8} withBorder>
          <Group position="center">
            <ThemeIcon size={40} radius={8} variant="light">
              <IconPhotoUp />
            </ThemeIcon>
            <Title order={5}>Upload Images</Title>
          </Group>
        </Card>
        <Title order={4} mt={24} mb={8}>
          Video & VR
        </Title>
        <Card radius={8} withBorder>
          <Group position="center">
            <ThemeIcon size={40} radius={8} variant="light">
              <IconPhotoUp />
            </ThemeIcon>
            <Title order={5}>Upload Video & VR</Title>
          </Group>
        </Card>
        <Group position="right">
          <Button radius={8} mt={24} px={32} onClick={handleSign}>
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
