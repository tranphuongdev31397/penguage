import BottomBar from "@/components/bottombar";
import Sidebar from "@/components/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Sidebar className="hidden sm:block" />
      <main className="relative max-w-screen-lg mx-auto  z-10 max-lg:pb-[var(--web-ui-bottom-height)] h-full overflow-auto sm:pl-[var(--web-ui-sidebar-width-noLabels)] lg:pl-[var(--web-ui-sidebar-width)]">
        {children}
      </main>
      <BottomBar className="max-sm:block hidden z-50 fixed left-0 w-full bottom-0" />
    </>
  );
}
