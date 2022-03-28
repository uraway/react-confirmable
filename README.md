# ReactConfirmable

[![npm version](https://badge.fury.io/js/react-confirmable.svg)](https://badge.fury.io/js/react-confirmable) [![uraway](https://circleci.com/gh/uraway/react-confirmable.svg?style=svg)](https://app.circleci.com/pipelines/github/uraway/react-confirmable)

**High Order Component for Beautiful React Dialog**

This enables any React Dialog component to be callable.

## Demo

![Jun-07-2021 4-58-12 PM](https://user-images.githubusercontent.com/15242484/120980676-cf8a0580-c7b1-11eb-8747-359894ada0c2.gif)

```js
const isConfirmed = await confirmation({
  title: 'Title',
  body: 'Body',
});
```

https://uraway.github.io/react-confirmable

## Install

```
yarn add react-confirmable
```

## How to make your Dialog component to be callable

1. Create your Dialog component:

`WrappedComponentProps` has following properties:

- show: if `true`, modal will open
- confirm: callback function which closes modal, returns `true`
- abort: callback function which closes modal, returns `false`

```js
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReactNode } from 'react';
import { WrappedComponentProps } from 'react-confirmable';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  title: string,
  body: ReactNode,
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
```

2. Wrap your Dialog component with `withConfirmation`:

```js
import { withConfirmation } from 'react-confirmable';

const ConfirmationModal = withConfirmation(BaseModal);
```

3. Create `confirmation` function with `createConfirmation`. It accepts any props passing to your Dialog component:

```js
import { createConfirmation } from 'react-confirmable';

const confirmation = (props: Props): Promise<boolean> => {
  return createConfirmation(ConfirmationModal, props);
};
```

4. Use `confirmation`. When `confirm` is fired, it will resolve `true`. When `abort` is fired, it will resolve `false`:

```js
const isConfirmed = await confirmation({
  title: 'Title',
  body: 'Body',
});
```

Check more [examples](https://github.com/uraway/react-confirmable/tree/master/src/stories) with Chakra UI, Material UI and React Bootstrap:

# License

MIT License
