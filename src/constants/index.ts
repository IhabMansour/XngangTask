import HeadphoneImage from "../Images/browser-icons/headphone.png";
import BusinessImage from "../Images/browser-icons/business.png";
import ChilrenImage from "../Images/browser-icons/children.png";
import CookingImage from "../Images/browser-icons/cooking.png";
import LifestyleImage from "../Images/browser-icons/lifestyle.png";
import GlassImage from "../Images/browser-icons/glass.png";
import HeartImage from "../Images/browser-icons/heart.png";
import ScienceImage from "../Images/browser-icons/science.png";

export const PAGES = [
  {
    menuID: "home",
    label: "home",
    menuLink: "/home",
  },
  {
    menuID: "books",
    label: "books",
    menuLink: "/books",
  },
  {
    menuID: "reviews",
    label: "reviews",
    menuLink: "/reviews",
  },
  {
    menuID: "news",
    label: "news",
    menuLink: "/news",
  },
  {
    menuID: "contacts",
    label: "contacts",
    menuLink: "/contacts",
  },
];

export const BOOKS_BROWSER_CATEGORIES = [
  {
    categoryID: 1,
    title: "audio books",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: HeadphoneImage,
  },
  {
    categoryID: 2,
    title: "business books",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: BusinessImage,
  },
  {
    categoryID: 3,
    title: "children's books",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: ChilrenImage,
  },
  {
    categoryID: 4,
    title: "cooking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: CookingImage,
  },
  {
    categoryID: 5,
    title: "lifestyles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: LifestyleImage,
  },
  {
    categoryID: 6,
    title: "mystery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: GlassImage,
  },
  {
    categoryID: 7,
    title: "romance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: HeartImage,
  },
  {
    categoryID: 8,
    title: "science fiction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    IconComponent: ScienceImage,
  },
];
