import { ReactElement } from 'react';
import Image from 'next/image';
import Container from 'components/layout/Container';
import Button from 'components/forms/Button';
import Heading from 'components/type/Heading';
import bgMobile from 'assets/svg/bg-intro-mobile.svg';
import bgDesktop from 'assets/svg/bg-intro-desktop.svg';
import mockups from 'assets/img/image-mockups.png';

interface HeroProps {
  className?: string;
}

/**
 * Build CSS classes
 */
const buildClasses = (className?: string): string =>
  [className, 'relative', 'py-10', 'bg-white', 'dark:bg-gray-800', 'transition-colors'].join(' ');

/**
 * Hero component
 */
const Hero = ({ className }: HeroProps): ReactElement => {
  return (
    <section className={buildClasses(className)}>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Background */}
        <div className="sm:hidden w-full absolute left-0 top-0">
          <Image src={bgMobile} alt="Image" layout="responsive" />
        </div>
        <div className="hidden sm:block absolute top-0 md:-top-1/4 md:left-1/2 md:transform md:translate-x[-10%]">
          <Image src={bgDesktop} alt="Image" />
        </div>

        {/* Mockups */}
        <div className="relative mt-[-35%] md:order-2 xl:w-[125%] 2xl:w-[150%] xl:max-w-none xl:mb-[-20%] 2xl:mb-[-40%] z-10">
          <Image src={mockups} alt="Image" layout="responsive" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left space-y-7 md:order-1 relative">
          <Heading level={1} className="dark:text-white transition-colors">Next generation digital banking</Heading>

          <p className="text-sm md:text-base lg:text-lg text-gray-400 dark:text-gray-300 leading-relaxed transition-colors">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <Button>Request Inivite</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
