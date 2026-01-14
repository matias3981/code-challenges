import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-200 h-[80px]">
      <Link href="/">Go back</Link>
    </header>
  );
}
