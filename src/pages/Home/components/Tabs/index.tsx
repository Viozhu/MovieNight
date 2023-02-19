//@ts-nocheck
import { Movie } from "@graphqlTypes";
import { useState } from "react";
import { Icon, Modal } from "@styleComponents";
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

  const sliceController = (direction: string) => {
    const contenedor = document.getElementById("sliceContenedor");
    const scrollOffset = 600;

    if (direction === "left") {
      contenedor.scrollTo({
        left: contenedor.scrollLeft - scrollOffset,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollTo({
        left: contenedor.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-1 mt-12 mb-8">
        <h2 className="text-4xl font-bold text-brown-3">{title}</h2>
        <p className="text-xl text-brown-3">{subTitle}</p>
      </div>
      {status === "success" && (
        <div className="flex justify-center items-center">
          {data.length > 0 ? (
            <div className="flex justify-center space-x-5 items-center">
              <Icon
                name="chevron-thin-left"
                color="ffffff"
                onClick={() => sliceController("left")}
                style="  scale-100 cursor-pointer hover:scale-150 hover:ease-in-out hover:duration-300 hover:transition"
              />
              <div className={styles.CARD_CONTAINER} id="sliceContenedor">
                {data.map((item) => (
                  <Card
                    item={item}
                    onClick={() => setCurrentItem({ item, show: true })}
                  />
                ))}
              </div>
              <Icon
                name="chevron-thin-right"
                color="ffffff"
                onClick={() => sliceController("right")}
                style=" scale-100 cursor-pointer hover:scale-150 hover:ease-in-out hover:duration-300 hover:transition"
              />
            </div>
          ) : (
            <div className="h-24 flex items-center justify-center w-full">
              <p className="text-center text-2xl">No movies added yet 😭</p>
            </div>
          )}
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
