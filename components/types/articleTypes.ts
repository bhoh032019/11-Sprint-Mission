export interface ArticleList {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface ArticleListResponse {
  totalCount: number;
  list: ArticleList[];
}

export type ArticleOrderBy = 'recent' | 'like';
