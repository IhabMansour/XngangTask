import BooksSlider from "@/components/BooksSlider";
import type { Meta, StoryObj } from "@storybook/react";
import MoonImage from "@/images/moon.jpg";

const meta = {
  title: "Components/BooksSlider",
  component: BooksSlider,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof BooksSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const hasBackground: Story = {
  args: {
    mainTitle: "children's",
    booksData: [
      {
        id: 1,
        image: "/images/books1.jpg",
        title: "Maecenas",
        author: "Vestibulum turpis",
        reviewedBy: "Etiam feugiat",
      },
      {
        id: 2,
        image: "/images/books2.jpg",
        title: "Nam",
        author: "Fusce vulputate",
        reviewedBy: "Nunc nec",
      },
      {
        id: 3,
        image: "/images/books3.jpg",
        title: "Suspendisse",
        author: "Suspendisse pulvinar",
        reviewedBy: "Phasellus volutpat",
      },
      {
        id: 4,
        image: "/images/books4.jpg",
        title: "Maecenas",
        author: "Vestibulum turpis",
        reviewedBy: "Etiam feugiat",
      },
      {
        id: 5,
        image: "/images/books5.jpg",
        title: "Nam",
        author: "Fusce vulputate",
        reviewedBy: "Nunc nec",
      },
      {
        id: 6,
        image: "/images/books6.jpg",
        title: "Suspendisse",
        author: "Suspendisse pulvinar",
        reviewedBy: "Phasellus volutpat",
      },
    ],
    backgroundImage: MoonImage,
    booksCategory: "children",
  },
};

export const NoBackground: Story = {
  args: {
    mainTitle: "children's",
    booksData: [
      {
        id: 1,
        image: "/images/books1.jpg",
        title: "Maecenas",
        author: "Vestibulum turpis",
        reviewedBy: "Etiam feugiat",
      },
      {
        id: 2,
        image: "/images/books2.jpg",
        title: "Nam",
        author: "Fusce vulputate",
        reviewedBy: "Nunc nec",
      },
      {
        id: 3,
        image: "/images/books3.jpg",
        title: "Suspendisse",
        author: "Suspendisse pulvinar",
        reviewedBy: "Phasellus volutpat",
      },
      {
        id: 4,
        image: "/images/books4.jpg",
        title: "Maecenas",
        author: "Vestibulum turpis",
        reviewedBy: "Etiam feugiat",
      },
      {
        id: 5,
        image: "/images/books5.jpg",
        title: "Nam",
        author: "Fusce vulputate",
        reviewedBy: "Nunc nec",
      },
      {
        id: 6,
        image: "/images/books6.jpg",
        title: "Suspendisse",
        author: "Suspendisse pulvinar",
        reviewedBy: "Phasellus volutpat",
      },
    ],
    backgroundImage: "",
    booksCategory: "children",
  },
};
