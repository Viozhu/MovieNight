import Icon from '../Icon';
import * as styles from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string;
};

const Modal = ({ visible, onClose, children, title }: Props) => {
  return (
    <>
      {visible && (
        <div
          className={styles.MODAL_CONTAINER}
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          <div className={styles.INNER_CONTENT}>
            <div className={styles.MODAL_CONTENT}>
              <div className="flex justify-end w-full ">
                <button
                  className={styles.ICON}
                  onClick={(event) => {
                    event.preventDefault();
                    onClose();
                  }}
                >
                  <Icon name="cross" color="gray-2" />
                </button>
              </div>

              {title && (
                <div
                  className={`${styles.TITLE_CONTAINER} ${title ? 'mb-4' : ''}`}
                >
                  <div className="flex flex-row items-center w-auto">
                    <h2 className="text-xl text-black">{title}</h2>
                  </div>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
