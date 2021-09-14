import ArticleRepository from 'src/repositories/ArticleRepository';

test('articles repository returns an array of articles', async () => {
  const repository = new ArticleRepository();
  const articles = await repository.all();
  expect(articles).toBeInstanceOf(Array);
});
