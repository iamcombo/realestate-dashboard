import confirm from '@/assets/confirmation.svg';
import {
  Button,
  Card,
  Col,
  Grid,
  Modal,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';

interface IConfirm {
  modal: boolean;
  setModal: (v: boolean) => void;
  callbackFn: () => void;
  status: 'idle' | 'pending' | 'success' | 'error';
}

const Confirmation = ({ modal, setModal, callbackFn, status }: IConfirm) => {
  return (
    <Modal
      opened={modal}
      onClose={() => setModal(false)}
      radius={16}
      withCloseButton={false}
      padding={24}
      transitionProps={{ transition: 'slide-up', duration: 300 }}
      centered
    >
      <Grid columns={24} gutterSm={24} align="center">
        <Col sm={8}>
          <Card sx={{ position: 'relative', height: '120px' }}>
            <Image alt="" src={confirm} fill />
          </Card>
        </Col>
        <Col sm={16}>
          <Title order={3}>Confirmation</Title>
          <Text c="dimmed">
            Are you sure you want to proceed? You can undo this action.
          </Text>
          <SimpleGrid cols={2} mt={24}>
            <Button
              size="md"
              radius={8}
              variant="light"
              color="red"
              onClick={() => setModal(false)}
            >
              Cancel
            </Button>
            <Button
              size="md"
              radius={8}
              loading={status === 'pending'}
              onClick={callbackFn}
            >
              Confirm
            </Button>
          </SimpleGrid>
        </Col>
      </Grid>
    </Modal>
  );
};

export default Confirmation;
