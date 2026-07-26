import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <h2 className="text-4xl font-bold mb-2">404 - Page Not Found</h2>
      <p className="mb-4">Could not find requested resource.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
