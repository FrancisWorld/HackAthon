import { motion } from "framer-motion";

const Leaderboard = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const titleVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const blockVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full sm:w-4/5 bg-gradient-to-b from-purple-900 to-indigo-800 text-white rounded-lg shadow-lg p-4 sm:p-8 mx-auto my-4 sm:my-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-red-500 h-2 sm:h-4 rounded-full mb-2 sm:mb-4 absolute top-0 left-0"
        variants={blockVariants}
      />
      <motion.h1
        className="text-2xl sm:text-4xl uppercase tracking-widest font-extrabold text-center mb-4 sm:mb-8 relative z-10"
        variants={titleVariants}
      >
        Leaderboard
      </motion.h1>
      <motion.div
        className="bg-gray-800 rounded-lg p-2 sm:p-4"
        variants={containerVariants}
      >
        {data && data.length > 0 ? (
          <ul className="space-y-2 sm:space-y-4 overflow-y-auto max-h-[600px]">
            {data.map((item, index) => (
              <motion.li
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 rounded-lg bg-gray-700"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0 sm:mr-auto">
                  <span className="text-gray-400 text-sm sm:text-lg">{index + 1}.</span>
                  <img
                    src={item.thumbUrl} // Add the avatar image here
                    alt="User Avatar"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg"
                  />
                  <span className="font-semibold text-sm sm:text-lg">{item.userName}</span>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="h-2 sm:h-4 bg-gray-800 rounded-full">
                    <motion.div
                      className="h-2 sm:h-4 rounded-full bg-gradient-to-r from-blue-600 to-green-400"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      style={{ width: `${Math.min(item.statsCount, 100)}%` }}
                    ></motion.div>
                  </div>
                </div>
                <span className="mt-2 sm:mt-0 text-gray-400 text-sm sm:text-lg sm:ml-7">
                  {item.statsCount} pts
                </span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <motion.h1
            className="text-sm sm:text-2xl tracking-widest font-extrabold text-center mb-4 sm:mb-8 relative z-10"
            variants={titleVariants}
            style={{ color: "#F4B400" }}
          >
            Sem usuários participando do{" "}
            <strong className="uppercase text-2xl sm:text-3xl text-yellow-300">
              LeaderBoard
            </strong>
          </motion.h1>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Leaderboard;
