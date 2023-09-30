export interface myFeedback {
  category: string;
  client: {
    name: string;
    email?: string;
    phone?: string;
    country?: string;
    social_links: string[];
  };
  text: string;
  rating: number;
  id: string;
  commentsCount: number;
  views: number;
  user: string;
  created_date: string;
}
