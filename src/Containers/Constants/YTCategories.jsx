import {
  BookOpenText,
  Gamepad2,
  House,
  MemoryStick,
  Music,
  Newspaper,
  Trophy,
  Truck,
  TvMinimalPlay,
} from "lucide-react";

export const YTCategories = [
  {
    label: "Home",
    value: 0,
    icon: (
      <House
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Gaming",
    value: 20,
    icon: (
      <Gamepad2
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Automobiles",
    value: 2,
    icon: (
      <Truck
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Sports",
    value: 17,
    icon: (
      <Trophy
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Entertainment",
    value: 24,
    icon: (
      <TvMinimalPlay
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Technology",
    value: 28,
    icon: (
      <MemoryStick
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Music",
    value: 10,
    icon: (
      <Music
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "People and Blogs",
    value: 22,
    icon: (
      <BookOpenText
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "News and Politics",
    value: 25,
    icon: (
      <Newspaper
        size={24}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
];
