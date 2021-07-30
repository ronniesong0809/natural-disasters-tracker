const Loading = () => {
  return (
    <div className="backdrop flex absolute z-10 w-screen h-screen">
      <div
        className="loading bg-white flex space-x-2 p-5 rounded-full m-auto justify-center"
        style={{ filter: "blur(0)" }}
      >
        <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle"></div>
        <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
        <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce red-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
