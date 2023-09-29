export type ClientType = {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  coutry: string;
  social_link?: string[];
};
export type UserInfoType = {
  id: string;
  name: string;
  email: string;
};
// export type TagsType = {
//   recommend: boolean; // TODO: Если рейтинг отзыва > 4
//   discussed: boolean; // TODO: Если кол-во комментариев > 10
//   сarefully: boolean; // TODO: Если рейтинг отзыва < 3
// };
export type TagsType = {
  tag: string;
  piture: string;
  title: boolean;
};

export type CommentType = {
  id: string;
  created_date: string;
  text: string;
  user: UserInfoType;
  sub_сomments?: CommentType[];
};

export type CommentTypeWithoutId = Omit<CommentType, "id">;

export type FeedbackType = {
  id: string;
  category: string;
  client: ClientType;
  text: string;
  rating: number;
  created_date: string;
  user: UserInfoType;
  views: number;
  tags: TagsType[];
};
