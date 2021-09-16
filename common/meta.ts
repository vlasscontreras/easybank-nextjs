import { titleCase } from 'title-case';

export const defaultTitle = 'Easybank';
export const separator = '|';
export const tagline = 'Next generation digital banking';

/**
 * Parse title
 */
export const title = (pageTitle: string = ''): string => {
  if (pageTitle) {
    return `${pageTitle} ${separator} ${defaultTitle}`;
  }

  return `${defaultTitle} ${separator} ${titleCase(tagline)}`;
};

/**
 * Parse description
 */
export const description = (content: string = ''): string => {
  const length = content.length;

  if (length > 160) {
    return content.substr(0, 160) + '...';
  }

  return content;
};
