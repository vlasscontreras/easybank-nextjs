import { ReactElement } from 'react';
import Image from 'next/image'
import Container from 'components/layout/Container';
import Heading from 'components/type/Heading';
import ArticleRepository from 'repositories/ArticleRepository';
import ArticleType from 'types/article';

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
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 -mx-5 xl:-mx-10 2xl:-mx-20">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-center object-cover"
            layout="fill"
          />
        </div>
        <div className="text-sm text-gray-400 mt-4 lg:mt-6">
          By {article.author}
        </div>

        <Heading level={1} className="line-clamp-1 mb-4 lg:mb-5">
          {article.title}
        </Heading>

        <p className="text-gray-400 leading-relaxed line-clamp-3 overflow-ellipsis">
          {article.content}
        </p>
      </Container>
    </section>
  );
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
