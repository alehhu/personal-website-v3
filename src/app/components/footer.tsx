'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { inter } from "@/app/fonts";
import styles from "@/components/footer.module.css"

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className={`${styles.footerContainer} ${inter.className}`}>
      
    </div>
  );
};

export default Footer;