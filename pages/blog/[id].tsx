import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Container from 'components/layout/Container';
import Heading from 'components/type/Heading';
import ArticleRepository from 'repositories/ArticleRepository';
import ArticleType from 'types/article';
import { title } from 'common/meta';

type StaticParams = {
  params: {
    id: string
  }
};

interface ArticleProps {
  article: ArticleType,
};

/**
 * Article component
 */
const Article = ({ article }: ArticleProps): ReactElement => {
  return (<>
    <Head>
      <title>{title(article.title)}</title>
      <meta name="description" content={article.content.substring(0, 160)} />
    </Head>

    <section className="py-10 lg:py-20 bg-white dark:bg-gray-800 transition-colors">
      <Container>
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700 -mx-5 xl:-mx-10 2xl:-mx-20">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-center object-cover"
            layout="fill"
          />
        </div>
        <div className="text-sm text-gray-400 dark:text-gray-300 mt-4 lg:mt-6">
          By {article.author}
        </div>

        <Heading level={1} className="mb-4 lg:mb-5 dark:text-white transition-colors">
          {article.title}
        </Heading>

        <div className="prose lg:prose-lg max-w-none dark:prose-dark transition-colors" dangerouslySetInnerHTML={{__html: article.content}} />
      </Container>
    </section>
  </>);
};

export default Article;

/**
 * Fetch article
 */
export const getStaticProps = async ({ params }: StaticParams) => {
  const { id } = params;
  const articleRepository = new ArticleRepository();
  const article = await articleRepository.find(id);

  return {
    props: {
      article,
    },
  }
}

/**
 * Map articles to routes
 */
export async function getStaticPaths() {
  const articleRepository = new ArticleRepository();
  const articles = await articleRepository.all();

  const paths = articles.map((article: ArticleType) => ({
    params: { id: article.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
