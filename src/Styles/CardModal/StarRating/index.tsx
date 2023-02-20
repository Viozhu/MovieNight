type Props = {
  vote: number;
};

const StartRating = ({ vote }: Props): JSX.Element => {
  const stars: Array<number> = [1, 2, 3, 4, 5];
  const voteRound: number = vote / 2;

  return (
    <div className="flex items-center">
      {stars.map((star: number) => {
        return (
          <svg
            key={star + 'svg'}
            aria-hidden="true"
            className={`w-5 h-5 ${
              voteRound >= star ? 'text-yellow-400' : 'text-gray'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      })}
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {voteRound}/5.0
      </p>
    </div>
  );
};

export default StartRating;
