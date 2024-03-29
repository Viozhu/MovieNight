import { Movie, SearchMovieQuery } from '@graphqlTypes';
import { CardModal } from '@styleComponents';

import { useState } from 'react';
import * as styles from './styles';
interface Props {
  data: Movie[] | Array<SearchMovieQuery['searchMovie']> | any;
}

const SearchModal = ({ data }: Props) => {
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

  return (
    <div className={styles.CONTAINER}>
      {!currentItem.show ? (
        <>
          <h1 className={styles.TITLE_CONTAINER}>Search results</h1>
          <div className={styles.SEARCH_CONTAINER}>
            {data ? (
              data.map((item, index) => (
                <div
                  key={item.id + index}
                  className={styles.CARD_CONTAINER}
                  onClick={() => setCurrentItem({ item, show: true })}
                >
                  <img
                    src={'https://image.tmdb.org/t/p/w92' + item.poster_path}
                    alt={item.title}
                    className="rounded"
                  />
                  <p className={styles.CARD_TEXT}>{item.title}</p>
                </div>
              ))
            ) : (
              <p className={styles.NO_RESULT}>No results</p>
            )}
          </div>
        </>
      ) : (
        <CardModal item={currentItem.item} />
      )}
    </div>
  );
};

export default SearchModal;
