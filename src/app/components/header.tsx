'use client'
import React from 'react';
import styles from "./header.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { inter } from "@/app/fonts";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={`${styles.headerContainer} ${inter.className}`}>
        <nav className={`${styles.navContainer}`}>
            <div className={styles.pageTitle}>
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Welcome To My Page
              </Link>
            </div>
            <div className={styles.pageTitle}>
              <Link href="/projects">
                Projects
              </Link>
            </div>
            <div className={styles.pageTitle}>
              <Link href="/courseReview">
                Course Review
              </Link>
            </div>
            <div className={styles.pageTitle}>
              <Link href="/readingList">
                Reading List
              </Link>
            </div>
            <div className={styles.pageTitle}>
              <Link href="/etc">
                etc
              </Link>
            </div>
            <div className={styles.pageTitle}>
              <Link href="/contact">
                Contact
              </Link>
            </div> 
        </nav>
    </div>
  );
};

export default Header;