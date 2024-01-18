import Link from 'next/link';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/" className="simple-text logo-mini">
        CT
      </Link>

      <Link href="/" className="simple-text logo-normal">
        Creative Tim
      </Link>
    </div>
  );
}
