import type { NextPage } from 'next'
import Head from 'next/head'
import HomeHero from 'components/sections/HomeHero';
import WhyUs from 'components/sections/WhyUs';
import RecentArticles from 'components/sections/RecentArticles';

const Home: NextPage = () => {
  return (<>
    <HomeHero />
    <WhyUs />
    <RecentArticles />
  </>)
}

export default Home
