import {
  withConfirmation,
  WrappedComponentProps,
  createConfirmation,
} from '..';
import { ReactNode } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';

type Props = {
  title: string;
  body: ReactNode;
};

const BaseModal = ({
  show,
  confirm,
  abort,
  title,
  body,
}: Props & WrappedComponentProps) => {
  return (
    <ChakraProvider>
      <Modal isOpen={show} onClose={abort}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={abort}>
              Close
            </Button>
            <Button colorScheme="blue" variant="ghost" onClick={confirm}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

const ConfirmationModal = withConfirmation(BaseModal);

export const confirm = (props: Props): Promise<boolean> => {
  return createConfirmation(ConfirmationModal, props);
};
