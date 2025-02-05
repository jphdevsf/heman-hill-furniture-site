import Image from 'next/image';
import Link from 'next/link';
// import styles from './header.module.css';

export default function Header() {
  return (
    <header className="bg-warmGray-950 flex flex-col items-center justify-center p-2.5 w-full mb-16">
      <h1 className="mt-8 mb-6">
          <Image 
            src="/images/heman-hill-logo.jpg" 
            alt="Heman Hill Furniture Portfolio" 
            width={134} 
            height={61} 
            priority
          />
      </h1>
      <nav>
        <ul className="text-lg flex gap-4 text-white mb-8">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
