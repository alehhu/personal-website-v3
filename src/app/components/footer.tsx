'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { inter } from "@/app/fonts";
import styles from "@/components/footer.module.css";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className={`${styles.footerContainer} ${inter.className} ${styles.footer}`}>
        <div>
          <a href="mailto:a.hu13@campus.unimib.it" className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/alessandrohu/" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href="https://github.com/alehhu" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/theycallmealehu/" className={styles.icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
    </div>
  );
};

export default Footer;