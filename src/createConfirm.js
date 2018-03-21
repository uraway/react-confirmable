// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

const createConfirm = (
  Component: React$ComponentType<any>,
  props: mixed
): Promise<void> => {
  const { body } = document;
  let wrapper;
  if (body !== null) {
    wrapper = body.appendChild(document.createElement('div'));
  }
  const cleanup = () => {
    ReactDOM.unmountComponentAtNode(wrapper);
    return setTimeout(() => wrapper.remove());
  };
  const promise: Promise<void> = new Promise((resolve, reject) => {
    try {
      ReactDOM.render(
        <Component cleanup={cleanup} resolve={resolve} {...props} />,
        wrapper
      );
    } catch (e) {
      reject(e);
      throw e;
    }
  });
  return promise;
};

export default createConfirm;
