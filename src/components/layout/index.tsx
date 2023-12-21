import { useState } from 'react'
import { useLockedBody } from '@/components/hooks/useBodyLock';
import { NavbarWrapper } from '@/components/navbar/navbar'
import { SidebarWrapper } from '@/components/sidebar/sidebar';
import { SidebarContext } from '@/components/layout/layout_context'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [_, setLocked] = useLockedBody(false)
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <section className="flex">
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </section>
    </SidebarContext.Provider>
  );
}

