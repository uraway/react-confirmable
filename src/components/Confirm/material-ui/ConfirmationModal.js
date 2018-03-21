// @flow

import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import { setConfirm } from '../../../';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export type Props = {
  show: boolean,
  confirm: () => void,
  abort: () => void,
  title: string,
  content: Node,
};

const ConfirmationModal = ({ show, confirm, abort, title, content }: Props) => (
  <Dialog
    open={show}
    transition={Transition}
    keepMounted
    onClose={abort}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={abort} color="primary">
        Disagree
      </Button>
      <Button onClick={confirm} color="primary">
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

export default setConfirm(ConfirmationModal);
