export type IComentsAboutUs = {
  date: string;
  userName: string;
  userAvatarUrl: string | null;
  rating: number;
  images: string[];
  reviewId: string;
  comment?: string | undefined;
};
