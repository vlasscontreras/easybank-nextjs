import Read from 'types/read-repository';
import Article from 'types/article';

interface ArticlePlaceholder {
  id: number;
  title: string;
  body: string;
}

class ArticleRepository implements Read<Article> {
  all = async (filters?: Record<string, string>): Promise<Article[]> => {
    let params = '';

    if (filters) {
      params = '?' + new URLSearchParams(filters).toString();
    }

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts${params}`
    );
    const data = await response.json();

    const posts = data.map((post: ArticlePlaceholder) => ({
      id: post.id,
      title: post.title,
      content: post.body,
      url: `/blog/${post.id}`,
      author: 'John Doe',
      image: 'https://source.unsplash.com/random',
    }));

    return Promise.resolve(posts);
  };

  find = async (id: number | string): Promise<Article | undefined> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data: ArticlePlaceholder = await response.json();

    return Promise.resolve({
      id: data.id,
      title: data.title,
      content: data.body,
      url: `/posts/${data.id}`,
      author: 'John Doe',
      image: 'https://source.unsplash.com/random',
    });
  };
}

export default ArticleRepository;
