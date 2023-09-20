import React from 'react';
import * as styles from './styles';
import { Icon } from '@styleComponents';
import { Movie } from '@graphqlTypes';

interface Props {
  data: Movie[];
}

const Banner = ({ data }: Props) => {
  const scrollSmooth = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.BANNER_CONTAINER}>
      <div className={styles.TEXT_CONTAINER}>
        <h1 className={styles.TITLE}>Welcome to Movie Night</h1>
        <p className={styles.SUBTITLE}>The best sellers this week!</p>
        <div className={styles.CARDS_BANNER}>
          {data?.slice(0, 5).map((item) => (
            <img
              key={item.id + 'banner'}
              className="object-cover h-full rounded"
              src={'https://image.tmdb.org/t/p/w185' + item.poster_path}
              alt="image"
              width={200}
            />
          ))}
        </div>
      </div>
      <div className={styles.BUTTON_CONTAINER}>
        <button className={styles.BUTTON} onClick={() => scrollSmooth('conte')}>
          <Icon name="arrow-down" />
        </button>
      </div>
      <div id="conte" />
    </div>
  );
};

export default Banner;
