import { ReactElement, useEffect, useState } from 'react';
import Container from 'components/layout/Container';
import Heading from 'components/type/Heading';
import Article from 'components/cards/Article';
import ArticleRepository from 'repositories/ArticleRepository';
import ArticleLoader from 'components/loaders/ArticleLoader';

/**
 * Get article loaders
 */
const getLoaders = (count = 4): ReactElement[] => {
  return Array.from({ length: count }, (_, index) => (
    <ArticleLoader key={`loader-${index}`} />
  ));
};

/**
 * Fetch articles
 */
const fetchArticles = async () => {
  const articleRepository = new ArticleRepository();
  const articles = await articleRepository.all({ _limit: '4' });

  return articles.map((article) => (
    <Article key={`article-${article.id}`} article={article} />
  ));
};

/**
 * Articles component
 */
const Articles = (): ReactElement => {
  const [articles, setArticles] = useState<ReactElement[]>(getLoaders());

  useEffect(() => {
    fetchArticles().then((sourceArticles) => {
      setArticles(sourceArticles);
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Heading className="col-span-1 md:col-span-2 lg:col-span-4">
          Latest Articles
        </Heading>

        {articles}
      </Container>
    </section>
  );
};

export default Articles;
