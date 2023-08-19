import BookCard from "@/components/BookCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/BookCard",
  component: BookCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const hasBackground: Story = {
  args: {
    id: 10,
    image: "/images/books10.jpg",
    title: "Maecenas",
    author: "Vestibulum turpis",
    reviewedBy: "Etiam feugiat",
    hasBackground: "",
    booksCategory: "fiction",
  },
};

export const NoBackground: Story = {
  args: {
    id: 10,
    image: "/images/books10.jpg",
    title: "Maecenas",
    author: "Vestibulum turpis",
    reviewedBy: "Etiam feugiat",
    hasBackground: "yes",
    booksCategory: "fiction",
  },
};
