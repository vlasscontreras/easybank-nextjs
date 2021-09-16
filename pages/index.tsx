import type { NextPage } from 'next'
import Head from 'next/head'
import HomeHero from 'components/sections/HomeHero';
import WhyUs from 'components/sections/WhyUs';
import RecentArticles from 'components/sections/RecentArticles';
import { title, description, tagline } from 'common/meta';

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>{title()}</title>
      <meta name="description" content={description(tagline)} />
    </Head>

    <HomeHero />
    <WhyUs />
    <RecentArticles />
  </>)
}

export default Home
