// components/ProgressBar.tsx
'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProgressBar() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current !== pathname) {
      NProgress.start();
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
