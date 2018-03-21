# ReactConfirmDecorator

## Install

```
yarn add react-confirm-decorator
```

## Usage

Create Modal Component:

```javascript
// components/ConfirmationModal.js
import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import { setConfirm } from 'react-confirm-decorator';

// show, confirm, abort are reserved props
const ConfirmationModal = ({ show, confirm, abort, title, body }) => (
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
```

Create confirm function:

```javascript
// utils/confim.js
import { createConfirm } from 'react-confirm-decorator';

import ConfirmationModal from './ConfirmationModal';

const confirm = props => createConfirm(ConfirmationModal, props);

export default confirm;
```

Use confirm:

```javascript
import confirm from './utils/confirm';

async function handleClick(confirm) {
  const isConfirmed = await confirm({
    title: 'CAUTION',
    body: 'Are you sure?',
  });
  console.log(isConfirmed); // boolean
}
```
