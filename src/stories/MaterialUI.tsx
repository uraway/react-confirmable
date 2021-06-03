import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
import {
  withConfirmation,
  WrappedComponentProps,
  createConfirmation,
} from '..';
import { ReactNode } from 'react';

type Props = {
  title: string;
  body: ReactNode;
  themeType: 'dark' | 'light';
};

export const createTheme = (type: 'dark' | 'light'): Theme =>
  createMuiTheme({
    palette: {
      type,
    },
  });

const BaseModal = ({
  show,
  confirm,
  abort,
  title,
  body,
  themeType,
}: Props & WrappedComponentProps) => (
  <ThemeProvider theme={createTheme(themeType)}>
    <Dialog open={show} onClose={abort}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button id="cancel" onClick={abort} color="secondary">
          Cancel
        </Button>
        <Button id="confirm" onClick={confirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  </ThemeProvider>
);

const ConfirmationModal = withConfirmation(BaseModal);

export const confirm = (props: Props): Promise<boolean> => {
  return createConfirmation(ConfirmationModal, props);
};
