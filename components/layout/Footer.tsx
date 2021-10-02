import { ReactElement } from 'react';
import Logo from 'components/icons/Logo';
import Container from 'components/layout/Container';
import SocialMenu from 'components/navigation/SocialMenu';
import FooterMenu from 'components/navigation/FooterMenu';
import FooterCopyright from 'components/navigation/FooterCopyright';
import Button from 'components/forms/Button';
import { footerLinks } from 'common/nav-links';
import { ThemeContext } from 'context/ThemeContext';

/**
 * Footer component
 */
const Footer = (): ReactElement => {
  return (
    <footer className="bg-white dark:bg-gray-900 px-5 py-10 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center gap-7">
          <div className="flex flex-wrap justify-center md:justify-start space-y-7 w-full col-span-1 h-full">
            <ThemeContext.Consumer>
              {({ theme }) => (
                <Logo mode={theme === 'dark' ? 'light' : 'dark'} />
              )}
            </ThemeContext.Consumer>
            <SocialMenu className="w-full justify-center md:justify-start" />
          </div>

          <FooterMenu
            links={footerLinks}
            className="mx-auto md:ml-0 col-span-1 md:col-span-2 lg:col-span-3 h-full"
          />

          <div className="flex flex-wrap justify-center md:justify-end space-y-7 w-full col-span-1 h-full">
            <Button>Request Inivite</Button>
            <FooterCopyright className="w-full text-center md:text-right" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
