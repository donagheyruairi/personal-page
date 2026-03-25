'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-20 w-full items-center gap-x-2 overflow-hidden p-4 sticky top-0 bg-background border-b z-1">
      <img
        className="w-28"
        src="/Logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />
      <nav className="ml-auto flex gap-x-4">
        {/* hardcoding these links for now. I'm not sure if I want to vary how they look or act. */}
        <Link href="/" className={pathname == '/' ? '' : 'scale-90 opacity-80'}>
          Home
        </Link>
        <Link
          href="/cv"
          className={pathname == '/cv/' ? '' : 'scale-90 opacity-80'}
        >
          CV
        </Link>
        <Link
          href="/blog"
          className={pathname == '/blog/' ? '' : 'scale-90 opacity-80'}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
