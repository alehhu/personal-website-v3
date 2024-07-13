'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from "./header.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { inter } from "@/app/fonts";
import { useMediaQuery } from 'react-responsive';

const Header = () => {

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 833 }); // Adjust breakpoint as needed 768

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.headerContainer} ${inter.className}`}>
        <button className={`${styles.menuButton}`} onClick={toggleMenu}>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12" ><animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate><animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate></polyline>
                  <polyline fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5" ><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline></svg>
        </button> 
        <nav className={`${styles.navContainer} ${isMobile && isMenuOpen ? styles.menuOpen : ''}`}
          // Add transition for closing animation
          style={{ transition: isMenuOpen ? 'transform 0.35s ease-in' : 'transform 0.35s ease-out' }}
        >    
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

/*
{isMenuOpen && (
              <>
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
              </>
            )}
*/

/* codice per mobile
{isMobile && (
        <>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12" ><animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate><animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate></polyline>
              <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5" ><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline></svg>
          </button>
          <div className={`${styles.navContainer} ${isMenuOpen ? styles.menuOpen : ''}`}
            // Add transition for closing animation
            style={{ transition: isMenuOpen ? 'transform 0.35s ease-in' : 'transform 0.35s ease-out' }}
          >
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
          </div>  
        </>
      )}
*/