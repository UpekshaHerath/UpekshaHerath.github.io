// calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 divs, each representing a step of the stairs.
  Each step runs the same CSS animation (.stair in globals.css): it starts covering
  the screen and then drops away. The delay is based on the reversed index,
  creating a staggered effect with decreasing delay for each subsequent step.
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <div
            key={index}
            className="stair h-full w-full bg-white"
            style={{ animationDelay: `${reverseIndex(index) * 0.1}s` }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
