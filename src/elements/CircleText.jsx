const CircleText = () => {
  const text = " ELEVATEX DEVELOPER";
  const radius = 50;

  return (
    <div className="relative w-[100px] h-[100px] animate-spin-slow">
      {text.split("").map((char, i) => {
        const angle = (360 / text.length) * i;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return (
          <span
            key={i}
            className="absolute text-sm font-bold text-blue-500"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "0 0",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircleText;
