import SideNav from '@/app/ui/dashboard/sidenav';

// "Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them."
// https://nextjs.org/learn/dashboard-app/partial-prerendering#implementing-partial-prerendering

// The experimental feature "experimental.ppr" can only be enabled when using the latest canary version of Next.js 
// export const experimental_ppr = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}