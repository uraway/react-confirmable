import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setConfirm, WrappedComponentProps, createConfirm } from '..';
import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
}: Props & WrappedComponentProps) => (
  <div className="static-modal">
    <Modal show={show} onHide={abort} backdrop>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button id="cancel" onClick={abort}>
          Cancel
        </Button>
        <Button id="confirm" className="button-l" onClick={confirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

const ConfirmationModal = setConfirm(BaseModal);

export const confirm = (props: Props): Promise<boolean> => {
  return createConfirm(ConfirmationModal, props);
};
