import { Link } from '@tanstack/react-router';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-full">
      <aside className="w-52 bg-slate-800 p-5 shadow-lg">
        <nav className="flex flex-col gap-2.5">
          <Link
            to="/"
            className="px-4 py-3 text-slate-100 no-underline rounded-md transition-colors font-medium hover:bg-slate-700"
            activeProps={{ className: 'bg-blue-600 text-white' }}
          >
            Table Config
          </Link>
          <Link
            to="/data-table"
            className="px-4 py-3 text-slate-100 no-underline rounded-md transition-colors font-medium hover:bg-slate-700"
            activeProps={{ className: 'bg-blue-600 text-white' }}
          >
            Data Table
          </Link>
          <Link
            to="/admin"
            className="px-4 py-3 text-slate-100 no-underline rounded-md transition-colors font-medium hover:bg-slate-700"
            activeProps={{ className: 'bg-blue-600 text-white' }}
          >
            Admin Panel
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto bg-slate-100">{children}</main>
    </div>
  );
};

export default Layout;
