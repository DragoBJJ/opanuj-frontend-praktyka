import { Article } from '../types/Article';

type REDUCER_ACTIONS =
  | { type: 'SET_ARTICLES'; payload: Article[] }
  | { type: 'ADD_ARTICLE'; payload: Article }
  | { type: 'REMOVE_ARTICLE'; payload: Article['id'] };

const sortingFromTheEnd = (articles: Article[]) => {
  return articles.sort((a, b) => b.id - a.id);
};

export function articleReducer(articles: Article[], action: REDUCER_ACTIONS) {
  switch (action.type) {
    case 'SET_ARTICLES':
      articles = action.payload;
      return sortingFromTheEnd(articles);
    case 'ADD_ARTICLE':
      return sortingFromTheEnd([...articles, action.payload]);

    case 'REMOVE_ARTICLE':
      const res = [...articles].filter(
        (article) => article.id !== action.payload
      );
      return sortingFromTheEnd(res);

    default:
      throw new Error('Invalid action type');
  }
}
