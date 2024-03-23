export interface StickyWrapperProps {
  children: React.ReactNode;
}

export function StickyWrapper({ children }: StickyWrapperProps) {
  return (
    <div className="hidden lg:block w-[368px]  sticky bottom-6">
      <div className="bg-rose-500 min-h-[calc(100vh-48px)]  sticky top-6 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
}
