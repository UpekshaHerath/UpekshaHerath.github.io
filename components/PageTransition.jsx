"use client";

import usePageChanged from "./usePageChanged";

const PageTransition = ({ children }) => {
  const { pathname, changed } = usePageChanged();
  return (
    <div key={pathname}>
      {/* cover overlay only on page navigation, not on first load */}
      {changed && (
        <div className="page-cover h-screen w-screen fixed bg-primary top-0 pointer-events-none" />
      )}
      {children}
    </div>
  );
};

export default PageTransition;
