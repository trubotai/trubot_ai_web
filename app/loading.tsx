const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-100 rounded-xl h-[200px] w-full shadow-sm"
        />
      ))}
    </div>
  );
};

export default Loading;
