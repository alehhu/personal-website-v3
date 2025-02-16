'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProgressBar() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      // Route has changed: start progress
      NProgress.start();

      // For demonstration, we immediately mark it done.
      // In a real app, you might want to delay until data is loaded.
      NProgress.done();

      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
