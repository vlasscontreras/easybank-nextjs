import { ReactElement, useState } from 'react';
import { Transition } from '@tailwindui/react';
import Container from 'components/layout/Container';
import NavbarBrand from 'components/navigation/NavbarBrand';
import NavbarToggler from 'components/navigation/NavbarToggler';
import NavbarMenu from 'components/navigation/NavbarMenu';
import Button from 'components/forms/Button';
import ThemeToggler from 'components/navigation/ThemeToggler';
import { links } from 'common/nav-links';

/**
 * Toggle the menu
 */
const toggle = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => {
  if (typeof navigator.vibrate === 'function') {
    navigator.vibrate(10); // Haptic feedback.
  }

  setIsOpen(!isOpen);
};

/**
 * Navbar component
 */
const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 py-5 shadow transition-colors">
      <Container className="flex justify-between items-center">
        <NavbarBrand />
        <NavbarToggler
          className="md:hidden"
          status={isOpen}
          onClick={() => toggle(isOpen, setIsOpen)}
        />

        {/* Mobile menu */}
        <Transition
          show={isOpen}
          enter="transition-all duration-200"
          enterFrom="transform -translate-y-full opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition-all duration-400"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform -translate-y-full opacity-0"
          className="fixed top-20 left-0 w-full px-5 z-10 md:hidden"
        >
          <NavbarMenu links={links} onClick={() => setIsOpen(false)} />
        </Transition>

        {/* Desktop menu */}
        <NavbarMenu links={links} className="hidden md:block md:justify-center md:flex-grow" />

        {/* Desktop-only CTA */}
        <Button className="hidden md:inline-block">Request Inivite</Button>

        <ThemeToggler className="ml-5 hidden md:inline-flex" />
      </Container>
    </nav>
  );
};

export default Navbar;
