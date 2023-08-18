export interface BookProps {
  id?: number;
  image: string;
  title: string;
  author: string;
  reviewedBy: string;
  hasBackground?: string;
  booksCategory?: string;
}

export interface BooksSliderProps {
  mainTitle: string;
  booksData: BookProps[];
  backgroundImage?: string;
  booksCategory?: string;
}

export interface CategoryProps {
  id?: number;
  title: string;
  description: string;
  image: string;
}

export interface ControlIconProps {
  isLeft?: boolean;
}
