'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';
import Typography from '../atoms/Typography/Typography';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Animals List' },
    { href: '/animals/AnimalDetails', label: 'Animal Detail' },
    { href: '/animals/1', label: 'Add Animal' },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Typography variant='title' size='medium' weight='bold'>
            🐾 Konimbo
          </Typography>
        </Link>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ''
              }`}
            >
              <Typography variant='body' size='small' weight='medium'>
                {item.label}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
