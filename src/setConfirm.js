// @flow

import React, { Component } from 'react';

type State = {
  show: boolean,
};

type Props = {
  resolve: boolean => void,
  cleanup: () => void,
};

function setConfirm(WrappedComponent: React$ComponentType<any>) {
  return class extends Component<Props, State> {
    constructor() {
      super();
      this.state = {
        show: true,
      };
    }

    abort = () => {
      const { resolve, cleanup } = this.props;
      this.setState(({ show: false }: { show: boolean }), () => {
        resolve(false);
        cleanup();
      });
    };

    confirm = () => {
      const { resolve, cleanup } = this.props;
      this.setState(({ show: false }: { show: boolean }), () => {
        resolve(true);
        cleanup();
      });
    };

    render(): React$Node {
      return (
        <WrappedComponent
          show={this.state.show}
          abort={this.abort}
          confirm={this.confirm}
          {...this.props}
        />
      );
    }
  };
}

export default setConfirm;
