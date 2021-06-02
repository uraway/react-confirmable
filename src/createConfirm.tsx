import { ComponentType } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

type Props = {
  resolve: (value: boolean) => void;
  cleanup: () => void;
};

export function createConfirm<T>(
  Component: ComponentType<Props>,
  props: T
): Promise<boolean> {
  const { body } = document;
  let wrapper: HTMLDivElement;
  if (body !== null) {
    wrapper = body.appendChild(document.createElement('div'));
  }
  const cleanup = () => {
    unmountComponentAtNode(wrapper);
    return setTimeout(() => wrapper.remove());
  };
  const promise: Promise<boolean> = new Promise((resolve, reject) => {
    try {
      render(
        <Component cleanup={cleanup} resolve={resolve} {...props} />,
        wrapper
      );
    } catch (e) {
      reject(e);
      throw e;
    }
  });
  return promise;
}
