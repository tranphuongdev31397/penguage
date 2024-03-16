import Sidebar from "@/components/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Sidebar />
      <main className="pl-[var(--web-ui-sidebar-width-noLabels)] lg:pl-[var(--web-ui-sidebar-width)]">
        {children}
      </main>
    </>
  );
}
