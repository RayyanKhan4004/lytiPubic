function DotsGrid()  {
  const rows = 5;
  const cols = 4;
  const dotSize = 15;
  const gap = 27;

  return (
    // w-[calc(4*15px+3*27px)] h-[calc(5*15px+4*27px)]
    <div className="relative  rotate-45 -z-10 w-[250px] h-[250px] ">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const left = col * (dotSize + gap);
        const top = row * (dotSize + gap);

        return (
          <div
            key={i}
            className="absolute rounded-full  border-2  border-[#E5E5E5] "
            style={{
              width: dotSize,
              height: dotSize,
              top,
              left,
             
            }}
          />
        );
      })}
    </div>
  );
};

export default DotsGrid;