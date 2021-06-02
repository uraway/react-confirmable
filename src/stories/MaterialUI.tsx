import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { setConfirm, WrappedComponentProps, createConfirm } from '..';
import { ReactNode } from 'react';

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
  <Dialog open={show} onClose={abort}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{body}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={abort} color="secondary">
        Cancel
      </Button>
      <Button onClick={confirm} color="primary">
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

const ConfirmationModal = setConfirm(BaseModal);

export const confirm = (props: Props) => {
  return createConfirm(ConfirmationModal, props);
};
