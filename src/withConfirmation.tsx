import { Component, ComponentType } from 'react';

type State = {
  show: boolean;
};

type Props = {
  resolve: (value: boolean) => void;
  cleanup: () => void;
};

export type WrappedComponentProps = {
  show: boolean;
  abort: () => void;
  confirm: () => void;
};

export function withConfirmation(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  WrappedComponent: ComponentType<any & WrappedComponentProps>
): typeof WrappedComponent {
  return class extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        show: true,
      };
    }

    abort = () => {
      const { resolve, cleanup } = this.props;
      this.setState({ show: false }, () => {
        resolve(false);
        cleanup();
      });
    };

    confirm = () => {
      const { resolve, cleanup } = this.props;
      this.setState({ show: false }, () => {
        resolve(true);
        cleanup();
      });
    };

    render() {
      const { show } = this.state;
      return (
        <WrappedComponent
          show={show}
          abort={this.abort}
          confirm={this.confirm}
          {...this.props}
        />
      );
    }
  };
}
