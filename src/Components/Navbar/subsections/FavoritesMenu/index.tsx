import data from "../../../../Pages/Home/graphql/queries/fakePopularMovies.json";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../Redux/store";
import "../../styles.css";

import * as styles from "./styles";

type Props = {};

const FavoritesMenu = () => {
  const movies = useSelector((state: RootState) => state.counter.value);

  return (
    <div className={styles.MENU_CONTAINER}>
      <div className={styles.TEXT_CONTAINER}>
        <h2 className="font-bold text-4xl">Mi favorite list</h2>
        <p className="text-xl">Here will be all your favorite movies</p>
      </div>
      <div className={styles.CARD_CONTAINER}>
        {movies.length > 0 ? (
          movies.map((item) => (
            <ul className={styles.CARD}>
              <div className={styles.CARD_CONTENT} key={item.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w185" + item.poster_path}
                  className="rounded-t"
                  alt="image"
                  width={200}
                />
                <div className={styles.TEXT_CONTENT}>
                  <p className="text-center ">{item.title}</p>
                </div>
              </div>
            </ul>
          ))
        ) : (
          <div className="h-24 flex items-center justify-center w-full">
            <p className="text-center text-2xl">No movies added yet 😭</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesMenu;
