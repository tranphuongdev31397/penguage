import BottomBar from "@/components/bottombar";
import Sidebar from "@/components/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Sidebar className="hidden sm:block" />
      <main className="relative pt-6 w-full  z-10 max-sm:pb-[var(--web-ui-bottom-height)] h-full sm:pl-[var(--web-ui-sidebar-width-noLabels)] max-sm:overflow-auto lg:pl-[var(--web-ui-sidebar-width)]">
        <div className="max-w-[1056px] h-full mx-auto">{children}</div>
      </main>
      <BottomBar className="max-sm:block hidden z-50 fixed left-0 w-full bottom-0" />
    </>
  );
}
