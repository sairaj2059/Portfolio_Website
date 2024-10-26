import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import defaultImage from "../resources/images/dp_image.png";
import {
  CodeRounded,
  DraftsRounded,
  HomeRounded,
  SchoolRounded,
  ContactPageRounded,
} from "@mui/icons-material";
export const userProfileDefaultData = {
  Name: "Raj Guragain",
  UserName: "raj_guragain",
  DOB: "01-03-2003",
  Address: " Bangalore",
  EmailID: "raj@gmail.com",
  PhoneNo: "987665432",
  Description: "Sairam",
  Photo: defaultImage,
};

export const IconTitleMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <DraftsRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
  GitHub: <GithubFilled className="icon" />,
  Facebook: <FacebookFilled className="icon" />,
  LinkedIn: <LinkedinFilled className="icon" />,
  Instagram: <InstagramFilled className="icon"/>
};

export const DEFAULT_SIDE_MENU = [
  {
    id:0,
    title: "Home",
    icon: IconTitleMap.Home,
    link: "/home",
  },
  {
    id:1,
    title: "Academics",
    icon: IconTitleMap.Academics,
    link: "/academics",
  },
  {
    id:2,
    title: "Projects",
    icon: IconTitleMap.Projects,
    link: "/projects",
  },
  {
    id:3,
    title: "Social Profiles",
    icon: IconTitleMap["Social Profiles"],
    link: "/social-profile",
  },
  {
    id:4,
    title: "Resume",
    icon: IconTitleMap.Resume,
    link: "/resume",
  },
];

export const SOCIAL_MEDIA_ICONS = [
  {
    icon: IconTitleMap.GitHub,
    link: "https://github.com/sairaj2059",
  },
  {
    icon: IconTitleMap.LinkedIn,
    link: "https://www.linkedin.com/in/sairaj1926/",
  },
  {
    icon: IconTitleMap.Facebook,
    link: "/",
  },{
    icon: IconTitleMap.Instagram,
    link: "/",
  },
];



export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = 0 ;

export const DarkTheme = "dark";
export const LightTheme = "light";
