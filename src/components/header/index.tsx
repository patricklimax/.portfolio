import '../../app/globals.css'
import './header.css'
import { Logotipo } from '../logotipo';
import { IconPointerPlus } from '@tabler/icons-react';

export const Header = () => {
  return (
    <header className="header fixed z-40 top-0 left-1/2 -translate-x-1/2">
      <Logotipo/>
      <nav>
        <ul className='flex items-center gap-2'>
          <li>
            <a href="#application">
              <span className='iconNav'>
                <IconPointerPlus stroke={2} size={22} />
              </span>
              <p className='font-medium'>Aplicações</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
