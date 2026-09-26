"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// true once the visitor has navigated away from the page they landed on,
// so page transitions play on navigation but never delay the first paint
const usePageChanged = () => {
  const pathname = usePathname();
  const firstPathname = useRef(pathname);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (pathname !== firstPathname.current) setChanged(true);
  }, [pathname]);

  // also check synchronously so the very first navigation doesn't wait for the effect
  return { pathname, changed: changed || pathname !== firstPathname.current };
};

export default usePageChanged;
