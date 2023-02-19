import { useState } from "react";
import UsePopularMovies from "./graphql/queries/usePopularMovies";
import data from "./graphql/queries/fakePopularMovies.json";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/counter";

const Home = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const { status, data: dataTest, error, refectch } = UsePopularMovies({});

  return (
    <div className="App">
      {status === "loading" && <div>loading</div>}
      {status === "error" && <div>error</div>}
      {status === "success" && (
        <div>
          {data?.data.popularMovies.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <img
                onClick={() => dispatch(addMovie(item))}
                src={"https://image.tmdb.org/t/p/w185" + item.poster_path}
                alt="image"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
