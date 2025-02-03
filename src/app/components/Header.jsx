import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image 
            src="/images/heman-hill-logo.jpg" 
            alt="Heman Hill Furniture Portfolio" 
            width={79} 
            height={36} 
            priority
          />
        </Link>
      </h1>
    </header>
  );
}
