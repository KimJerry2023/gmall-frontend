import { useSidebarContext } from '@/components/layout/layout_context';
import { StyledBurgerButton } from '@/components/navbar/navbar.style'

export const BurguerButton = () => {
  const { setCollapsed } = useSidebarContext()
  return (
    <div className={StyledBurgerButton()} onClick={setCollapsed}>
      <div />
      <div />
    </div>
  )
}