const Leaderboard = ({ data }) => {
  return (
    <div className="max-w-md mx-auto bg-zinc-800 text-white rounded shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex items-center justify-between gap-x-20 mb-3">
            <div className="flex items-center space-x-4">
              <span className="text-gray-200">{index + 1}.</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="relative w-32">
              <div className="bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-blue-700 h-4 rounded-full"
                  style={{ width: `${(item.points / 100) * 100}%` }}
                ></div>
              </div>
              <span className="absolute -top-1 right-0 p-1 text-xs text-gray-700/80">
                {item.points} pts
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
