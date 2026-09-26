"use client";

// components
import Stairs from "./Stairs";
import usePageChanged from "./usePageChanged";

const StairTransition = () => {
  const { pathname, changed } = usePageChanged();
  // skip on first load so content paints immediately; keying by pathname
  // remounts the steps and replays the CSS animation on every navigation
  if (!changed) return null;
  return (
    <div
      key={pathname}
      className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex overflow-hidden"
    >
      <Stairs />
    </div>
  );
};

export default StairTransition;
