'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-20 w-full items-center gap-x-2 overflow-hidden border-b p-4">
      <Image
        className="w-28"
        src="/Logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />
      <nav className="ml-auto flex gap-x-4">
        <Link href="/" className={pathname == '/' ? '' : 'scale-90 opacity-80'}>
          Home
        </Link>
        <Link
          href="/cv"
          className={pathname == '/cv' ? '' : 'scale-90 opacity-80'}
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
