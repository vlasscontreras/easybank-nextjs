import { ReactElement } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import BurgerIcon from 'components/icons/Burger';
import CloseIcon from 'components/icons/Close';
import Classable from 'types/classable';

interface NavbarTogglerProps extends Classable {
  onClick: () => void;
  status: boolean;
}

/**
 * Build the menu CSS classes
 */
const buildClasses = (className?: string, theme?: string): string => {
  const classes = [className, 'focus:outline-none'];

  if (theme === 'dark') {
    classes.push('text-white');
  } else {
    classes.push('text-gray-800');
  }

  return classes.join(' ');
}

/**
 * Navbar brand component
 */
const NavbarBrand = ({
  className,
  onClick,
  status,
}: NavbarTogglerProps): ReactElement => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button onClick={onClick} className={buildClasses(className, theme)}>
          { status ? <CloseIcon /> : <BurgerIcon /> }
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

NavbarBrand.defaultProps = {
  onClick: () => {},
  status: false,
  className: '',
};

export default NavbarBrand;
