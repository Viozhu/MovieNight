import { Movie } from "@graphqlTypes";
import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../../Redux/counter";
import * as styles from "./styles";
type Props = { item: Movie };

const Card = ({ item }: Props) => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default Card;
