import React, { useState, useCallback, useRef } from 'react';
// import { Modal } from 'antd';
import { ModalProps } from 'antd/es/modal';
import useImmutable from '../useImmutable';

interface UseMdoal extends ModalProps {
    isFullScreen?: boolean;
}

export const useModal = (options: UseMdoal = {}) => {
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => setVisible(false), []);

  const propsRef = useRef(options);
  propsRef.current = options;
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  const RenderModal = React.useRef(({ children, ...rest }) => {
    const props = {
      isFullScreen: false,
      destroyOnClose: true,
      onCancel: hide,
      onOk: hide,
      visible: visibleRef.current,
      ...rest,
      ...propsRef.current,
    };
    return (
      <Modal className={props.isFullScreen ? 'tms-modal-fullscreen' : ''} {...props}>
        {children}
      </Modal>
    );
  }).current;

  return {
    hide, show, visible, RenderModal,
  };
};

export function createUseComponent<T = any, P = any>(
  WrappedComponent: React.ComponentType<
        T & {
            customRef: React.MutableRefObject<P | undefined>;
        }
    >,
) {
  return (modalOptions: ModalProps = {}) => (options: ModalProps = {}) => {
    const { RenderModal, ...rest } = useModal(options);
    const ref = useRef<P>();

    const render = useImmutable((data: T) => {
      const WrappedComponentProps = {
        ...data,
        customRef: ref,
      };
      return (
        <RenderModal {...modalOptions}>
          <WrappedComponent {...WrappedComponentProps} />
        </RenderModal>
      );
    });

    return { ...rest, render, ref };
  };
}

export default useModal;
