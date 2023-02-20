import Icon from '../Icon';
import * as styles from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string;
  size?: 'sm' | 'lg';
};

const Modal = ({ visible, onClose, children, title, size = 'lg' }: Props) => {
  return (
    <>
      {visible && (
        <div
          className={styles.MODAL_CONTAINER}
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          <div
            className={
              styles.INNER_CONTENT +
              `${size === 'sm' ? 'w-full md:w-1/2' : ' w-full md:w-3/4 '}`
            }
          >
            <div className={styles.MODAL_CONTENT}>
              <div className={styles.BUTTON_CONTAINER}>
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
                  <div className={styles.TITLE_SUBCONTAINER}>
                    <h2 className={styles.TITLE}>{title}</h2>
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
