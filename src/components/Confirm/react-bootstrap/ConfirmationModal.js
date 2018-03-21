// @flow

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import { setConfirm } from '../../../';

export type Props = {
  show: boolean,
  confirm: () => void,
  abort: () => void,
  title: string,
  body: string,
};

const ConfirmationModal = ({ show, confirm, abort, title, body }: Props) => (
  <div className="static-modal">
    <Modal show={show} onHide={abort} backdrop>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={abort}>Cancel</Button>
        <Button className="button-l" bsStyle="primary" onClick={confirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

export default setConfirm(ConfirmationModal);
