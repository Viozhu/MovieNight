import { Movie } from '@graphqlTypes';
import { useState } from 'react';
import { Icon, Modal, CardModal } from '@styleComponents';
import Card from '../Card';
import * as styles from './styles';

type Props = {
  data: Array<Movie>;
  status: string;
  title: string;
  subTitle: string;
  id: string;
};

const Tabs = ({ data, status, title, subTitle, id }: Props) => {
  const [currentItem, setCurrentItem] = useState<{
    item: Movie;
    show: boolean;
  }>({
    item: {
      id: 0,
      title: '',
      poster_path: '',
      vote_average: 0,
      release_date: '',
      overview: '',
    },
    show: false,
  });

  const sliceController = (direction: string) => {
    const contenedor = document.getElementById(`sliceContenedor + ${id}`);
    const scrollOffset = 600;

    if (direction === 'left') {
      contenedor.scrollTo({
        left: contenedor.scrollLeft - scrollOffset,
        behavior: 'smooth',
      });
    } else {
      contenedor.scrollTo({
        left: contenedor.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div className={styles.CONTAINER}>
        <h2 className={styles.TITLE}>{title}</h2>
        <p className={styles.SUBTITLE}>{subTitle}</p>
      </div>
      {status === 'success' && (
        <div className={styles.TAB_CONTAINER}>
          {data.length > 0 ? (
            <div className={styles.ARROW_CONTAINER}>
              <Icon
                name="chevron-thin-left"
                color="ffffff"
                onClick={() => sliceController('left')}
                style={styles.ARROW}
              />
              <div
                className={styles.CARD_CONTAINER}
                id={`sliceContenedor + ${id}`}
              >
                {data.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    onClick={() => setCurrentItem({ item, show: true })}
                  />
                ))}
              </div>
              <Icon
                name="chevron-thin-right"
                color="ffffff"
                onClick={() => sliceController('right')}
                style={styles.ARROW}
              />
            </div>
          ) : (
            <div className={styles.NO_MOVIES}>
              <p className={styles.NO_MOVIES_TEXT}>No movies added yet 😭</p>
            </div>
          )}
        </div>
      )}

      {currentItem.show && (
        <Modal
          visible={currentItem.show}
          onClose={() => {
            setCurrentItem({
              item: {
                id: 0,
                title: '',
                poster_path: '',
                vote_average: 0,
                release_date: '',
                overview: '',
              },
              show: false,
            });
          }}
        >
          <CardModal item={currentItem.item} />
        </Modal>
      )}
    </>
  );
};

export default Tabs;
