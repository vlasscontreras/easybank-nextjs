import { ReactElement } from 'react';
import Container from 'components/layout/Container';
import Heading from 'components/type/Heading';
import Article from 'components/cards/Article';
import ArticleType from 'types/article';

interface ArticlesProps {
  articles: ArticleType[];
}

/**
 * Articles component
 */
const Articles = ({ articles }: ArticlesProps): ReactElement => {
  if (!(articles.length > 0)) {
    return <></>;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24 transition-colors">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Heading className="col-span-1 md:col-span-2 lg:col-span-4 dark:text-white transition-colors">
          Latest Articles
        </Heading>

        {articles.map((article) => (
          <Article key={`article-${article.id}`} article={article} />
        ))}
      </Container>
    </section>
  );
};

export default Articles;
