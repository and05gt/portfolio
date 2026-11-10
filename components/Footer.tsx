import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-(--border-sub) py-12 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <Link
            href="/"
            className="text-sm font-bold tracking-wider text-(--content-primary)">
            A<span className="text-(--accent)">. </span>DEMUS
          </Link>
          <p className="text-xs text-(--content-muted) mt-1">
            Junior Fullstack Developer • M.Sc. in Computer Science
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-(--content-secondary)">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors">
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link
            href="mailto:and05gt@gmail.com"
            className="hover:text-white transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
