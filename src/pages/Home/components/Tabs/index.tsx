import { Movie } from "@graphqlTypes";
import React from "react";
import Card from "../Card";
import * as styles from "./styles";
type Props = {
  data: Array<Movie>;
  status: string;
  title: string;
  subTitle: string;
};

const Tabs = ({ data, status, title, subTitle }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-12">
        <h2 className="text-4xl font-bold text-brown-3">{title}</h2>
        <p className="text-xl text-brown-3">{subTitle}</p>
      </div>
      {status === "success" && (
        <div className="flex justify-center items-center">
          <div className={styles.CARD_CONTAINER + "conte"}>
            {data.length > 0 ? (
              data.slice(0, 7).map((item) => <Card item={item} />)
            ) : (
              <div className="h-24 flex items-center justify-center w-full">
                <p className="text-center text-2xl">No movies added yet 😭</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
