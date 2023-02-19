//@ts-nocheck
import { Movie } from "@graphqlTypes";
import { useState } from "react";
import { Modal } from "@styleComponents";
import Card from "../Card";
import * as styles from "./styles";
import CardModal from "../CardModal";

type Props = {
  data: Array<Movie>;
  status: string;
  title: string;
  subTitle: string;
};

const Tabs = ({ data, status, title, subTitle }: Props) => {
  const [currentItem, setCurrentItem] = useState<Movie | {}>({
    item: {},
    show: false,
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-1 mt-12 mb-8">
        <h2 className="text-4xl font-bold text-brown-3">{title}</h2>
        <p className="text-xl text-brown-3">{subTitle}</p>
      </div>
      {status === "success" && (
        <div className="flex justify-center items-center">
          <div className={styles.CARD_CONTAINER + "conte"}>
            {data.length > 0 ? (
              data
                .slice(0, 7)
                .map((item) => (
                  <Card
                    item={item}
                    onClick={() => setCurrentItem({ item, show: true })}
                  />
                ))
            ) : (
              <div className="h-24 flex items-center justify-center w-full">
                <p className="text-center text-2xl">No movies added yet 😭</p>
              </div>
            )}
          </div>
        </div>
      )}

      <Modal
        visible={currentItem.show}
        onClose={() => {
          setCurrentItem({ item: {}, show: false });
        }}
        children={<CardModal item={currentItem.item} />}
      />
    </>
  );
};

export default Tabs;
