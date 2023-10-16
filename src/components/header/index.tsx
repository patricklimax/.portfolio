import { MenuLeft } from './headerLeft';
import { MenuRight } from './headerRight';
import './header.css'

export const Header = () => {
  return (
    <header className="header fixed z-40 top-0 left-1/2 -translate-x-1/2 text-slate-300 rounded">
      <MenuLeft />
      <MenuRight />
    </header>
  );
};
