import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from 'components/type/Heading';
import ArticleType from 'types/article';

interface ArticleProps {
  article: ArticleType;
}

/**
 * Article component
 */
const Article = ({ article }: ArticleProps): ReactElement => {
  return (
    <article
      key={`article-${article.id}`}
      className="rounded overflow-hidden relative"
      title={article.title}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-900">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-center object-cover"
          layout="fill"
        />
      </div>

      <div className="bg-white dark:bg-gray-700 p-5 md:p-6 transition-colors">
        <span className="text-xs text-gray-400 dark:text-gray-300 transition-colors">By {article.author}</span>

        <Heading
          level={3}
          className="text-base md:text-lg line-clamp-1 overflow-ellipsis mb-2 dark:text-white transition-colors"
        >
          <Link href={article.url}>
            <a className="stretched-link">{article.title}</a>
          </Link>
        </Heading>

        <p className="text-sm text-gray-400 dark:text-gray-300 leading-relaxed line-clamp-3 overflow-ellipsis transition-colors">
          {article.content}
        </p>
      </div>
    </article>
  );
};

export default Article;
