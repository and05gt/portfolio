import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-(--bg) flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-mono uppercase text-(--accent) mb-2">
        404 Error
      </span>
      <h1 className="text-4xl font-bold text-(--content-primary) mb-4">
        Project Not Found
      </h1>
      <p className="text-sm text-(--content-secondary) max-w-sm mb-8">
        The requested case study could not be located or may have been updated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-(--surface) border border-(--border-sub) text-(--content-primary) text-xs font-medium hover:border-(--accent) transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" />
        Return Home
      </Link>
    </div>
  );
};
export default NotFound;
