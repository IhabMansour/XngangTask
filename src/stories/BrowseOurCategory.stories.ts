import BrowseOurCategory from "@/components/BrowseOurCategory";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/BrowseOurCategory",
  component: BrowseOurCategory,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BrowseOurCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrowseOurCategoryComponent: Story = {
  args: {},
};
