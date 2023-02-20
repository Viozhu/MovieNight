import { Movie } from '@graphqlTypes';
import { CardModal } from '@styleComponents';

import { useState } from 'react';
type Props = {
  data: Array<Movie> | [] | any;
};

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
    <div className="text-black p-4 ">
      {!currentItem.show ? (
        <>
          <h1 className="text-2xl text-center text-brown-1">Search results</h1>
          <div className="flex justify-center items-center space-y-3 w-full space-x-5  flex-wrap ">
            {data ? (
              data.map((item, index) => (
                <div
                  key={item.id + index}
                  className="w-[92px] min-w-[92px] flex flex-col justify-center"
                  onClick={() => setCurrentItem({ item: item, show: true })}
                >
                  <img
                    src={'https://image.tmdb.org/t/p/w92' + item.poster_path}
                    alt={item.title}
                    className="rounded"
                  />
                  <p className="text-xs truncate text-center  mt-1">
                    {item.title}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center my-5">No results</p>
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
