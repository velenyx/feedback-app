export type ClientType = {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  country: string;
  social_links?: string[];
};

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

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
};

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
  comments_сount: number;
};
export enum StatusEnum {
  loading = "loading",
  success = "success",
  rejected = "rejected",
}
export type CommentTypeWithoutId = Omit<CommentType, "id">;

export type CreateFeedbackType = Omit<
  FeedbackType,
  "id" | "rating" | "views" | "comments_сount"
>;
