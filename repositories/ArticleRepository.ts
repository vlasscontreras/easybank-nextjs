import Read from 'types/read-repository';
import Article from 'types/article';

interface DevToUser {
  name: string;
}

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  body_html: string;
  cover_image: string;
  user: DevToUser;
}

class ArticleRepository implements Read<Article> {
  all = async (filters?: Record<string, string>): Promise<Article[]> => {
    let params = '';

    if (filters) {
      params = '?' + new URLSearchParams(filters).toString();
    }

    const response = await fetch(`https://dev.to/api/articles${params}`);
    const data = await response.json();

    const posts = data.map((post: DevToArticle) => ({
      id: post.id,
      title: post.title,
      content: post.description,
      url: `/blog/${post.id}`,
      author: post.user.name,
      image: post.cover_image ?? 'https://source.unsplash.com/random',
    }));

    return Promise.resolve(posts);
  };

  find = async (id: number | string): Promise<Article | undefined> => {
    const response = await fetch(`https://dev.to/api/articles/${id}`);

    if (response.status > 299) {
      return Promise.reject(new Error(`Could not find article with id ${id}`));
    }

    const post: DevToArticle = await response.json();

    return Promise.resolve({
      id: post.id,
      title: post.title,
      content: post.body_html,
      url: `/blog/${post.id}`,
      author: post.user.name,
      image: post.cover_image ?? 'https://source.unsplash.com/random',
    });
  };
}

export default ArticleRepository;
