import { ReactElement } from 'react';

/**
 * Article Loader component
 */
const ArticleLoader = (): ReactElement => {
  return (
    <div className="rounded bg-white">
      <div className="animate-pulse flex flex-col">
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 w-full"></div>

        <div className="flex-1 space-y-3 p-5 md:p-6">
          <div className="h-2 bg-gray-300 rounded w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-2/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLoader;
