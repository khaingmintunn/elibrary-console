export interface Book {
  book_id: string;
  title: string;
  author: string;
  description: string;
  category_id: string;
  rate: number;
  rated_users: number;
  publish_date: number;
  url: string;
  is_available: boolean;
  status: string;
  user_id: string;
  created: number;
  updated: number;
}
