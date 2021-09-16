import Head from 'next/head';
import HomeHero from 'components/sections/HomeHero';
import WhyUs from 'components/sections/WhyUs';
import RecentArticles from 'components/sections/RecentArticles';
import { title, description, tagline } from 'common/meta';
import ArticleRepository from 'repositories/ArticleRepository';
import ArticleType from 'types/article';

interface HomeProps {
  articles: ArticleType[];
}

const Home = ({ articles }: HomeProps) => {
  return (<>
    <Head>
      <title>{title()}</title>
      <meta name="description" content={description(tagline)} />
    </Head>

    <HomeHero />
    <WhyUs />
    <RecentArticles articles={articles} />
  </>)
}

export default Home;

/**
 * Fetch article
 */
export const getStaticProps = async () => {
  const articleRepository = new ArticleRepository();
  const articles = await articleRepository.all({
    per_page: '4',
  });

  return {
    props: {
      articles,
    },
  }
}
