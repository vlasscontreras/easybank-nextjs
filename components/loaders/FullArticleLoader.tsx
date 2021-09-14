import { ReactElement } from 'react';

/**
 * Full article Loader component
 */
const FullArticleLoader = (): ReactElement => {
  return (
    <div className="rounded bg-white">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 -mx-5 xl:-mx-10 2xl:-mx-20"></div>

        <div className="h-2 bg-gray-300 rounded w-1/4" />
        <div className="h-6 bg-gray-300 rounded" />
        <div className="h-3 bg-gray-300 rounded" />
        <div className="h-3 bg-gray-300 rounded" />
        <div className="h-3 bg-gray-300 rounded w-2/4" />
      </div>
    </div>
  );
};

export default FullArticleLoader;
