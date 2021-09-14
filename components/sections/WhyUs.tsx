import { ReactElement } from 'react';
import Container from 'components/layout/Container';
import IconCard from 'components/cards/IconCard';
import iconBudgeting from 'assets/svg/icon-budgeting.svg';
import iconOnboarding from 'assets/svg/icon-onboarding.svg';
import iconOnline from 'assets/svg/icon-online.svg';
import iconApi from 'assets/svg/icon-api.svg';
import Heading from 'components/type/Heading';

/**
 * Why us component
 */
const WhyUs = (): ReactElement => {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-100">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left space-y-4 lg:space-y-7 relative">
          <Heading>Why choose Easybank?</Heading>

          <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
          <IconCard icon={iconBudgeting} title="Online Banking">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </IconCard>

          <IconCard icon={iconOnboarding} title="Simple Budgeting">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </IconCard>

          <IconCard icon={iconOnline} title="Fast Onboarding">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </IconCard>

          <IconCard icon={iconApi} title="Open API">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </IconCard>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
