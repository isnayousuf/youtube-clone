import {
  Activity,
  BookOpenText,
  BookUser,
  Cat,
  CircleDollarSign,
  CircleHelp,
  Clapperboard,
  Gamepad2,
  Globe,
  House,
  Keyboard,
  Languages,
  LogOut,
  MemoryStick,
  MessageCircleQuestion,
  MessageSquareWarning,
  Music,
  Newspaper,
  Settings,
  ShieldQuestion,
  ShieldUser,
  SunMoon,
  Trophy,
  Truck,
  TvMinimalPlay,
  Youtube,
} from "lucide-react";

export const YTCategories = [
  {
    label: "Home",
    value: 0,
    icon: (
      <House
        size={20}
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
        size={20}
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
        size={20}
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
        size={20}
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
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Science & Tech",
    value: 28,
    icon: (
      <MemoryStick
        size={20}
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
        size={20}
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
        size={20}
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
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Film & Animation",
    value: 1,
    icon: (
      <Clapperboard
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Pets & Animals",
    value: 15,
    icon: (
      <Cat
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Howto & Style",
    value: 26,
    icon: (
      <MessageCircleQuestion
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Nonprofits & Activism",
    value: 29,
    icon: (
    <Activity 
        size={20}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
];


export const RightSideOptions = [
  {
    label: "Google Account",
    value: 0,
    icon: (
      <House
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Switch Account",
    value: 1,
    icon: (
      <BookUser
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Signout",
    value: 2,
    icon: (
      <LogOut
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Youtube Studio",
    value: 3,
    icon: (
      <Youtube
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Purchase and memberships",
    value: 4,
    icon: (
      <CircleDollarSign
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Your data in Youtube",
    value: 5,
    icon: (
      <ShieldUser
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Appearance: Device theme",
    value: 6,
    icon: (
      <SunMoon
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Language:British English",
    value: 7,
    icon: (
      <Languages
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Restricted Mode: Off",
    value: 8,
    icon: (
      <ShieldQuestion
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },

  {
    label: "Location: India",
    value: 9,
    icon: (
      <Globe
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Keyboard shortcuts",
    value: 10,
    icon: (
      <Keyboard
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Settings",
    value: 11,
    icon: (
      <Settings
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Help",
    value: 12,
    icon: (
    <CircleHelp
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
  {
    label: "Send feedback",
    value: 13,
    icon: (
      <MessageSquareWarning 
        size={18}
        strokeWidth={1.5}
        absoluteStrokeWidth
        className="side-icon"
      />
    ),
  },
];