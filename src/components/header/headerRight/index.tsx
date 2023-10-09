import './menuRight.css';
import { IconPointerPlus } from '@tabler/icons-react';

export const MenuRight = () => {
  return (
    <nav>
      <ul className="navRight">
        <li>
          <a href="#application">
            <IconPointerPlus stroke={2} size={22} color='#84cc16' />
            <p className='font-medium'>Aplicações</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
