import { useState } from "react";
import UsePopularMovies from "./graphql/queries/usePopularMovies";
import data from "./graphql/queries/fakePopularMovies.json";

const Home = () => {
  const [count, setCount] = useState(0);

  const {
    status,
    data: dataTest,
    error,
    refectch,
  } = UsePopularMovies({
    variables: { page: count + 1 },
  });

  return (
    <div className="App">
      <h1 className="text-3xl text-red-400 font-bold underline">
        Hello world!
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {status === "loading" && <div>loading</div>}
      {status === "error" && <div>error</div>}
      {status === "success" && (
        <div>
          {data?.data.popularMovies.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <img
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
