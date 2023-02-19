import data from "../../../../Pages/Home/graphql/queries/fakePopularMovies.json";
import "../../styles.css";

import * as styles from "./styles";

type Props = {};

const FavoritesMenu = () => {
  return (
    <div className={styles.MENU_CONTAINER}>
      <div className={styles.TEXT_CONTAINER}>
        <h2 className="font-bold text-2xl">Mi favorite list</h2>
        <p>Here will be all your favorite movies</p>
      </div>
      <div className={styles.CARD_CONTAINER}>
        {data?.data.popularMovies.map((item) => (
          <ul className={styles.CARD}>
            <div className={styles.CARD_CONTENT} key={item.id}>
              <img
                src={"https://image.tmdb.org/t/p/w185" + item.poster_path}
                className="rounded-t "
                alt="image"
                width={200}
              />
              <div className={styles.TEXT_CONTENT}>
                <p className="text-center ">{item.title}</p>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FavoritesMenu;
