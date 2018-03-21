// @flow

import { createConfirm } from '../../../';

import ConfirmationModal from './ConfirmationModal';

const confirm = (props: any) => createConfirm(ConfirmationModal, props);

export default confirm;
