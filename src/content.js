import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
const Links = [
  {
    link: "https://linkedin.com/in/a-deola",
    subText: "Connect with me on LinkedIn",
    linkDescription: "LinkedIn",
    icon: <LinkedInIcon sx={{ color: "#0077b5" }} />,
  },
  {
    link: "https://github.com/a-deola",
    subText: "Check out my GitHub for projects",
    linkDescription: "GitHub",
    icon: <GitHubIcon sx={{ color: "#181717" }} />,
  },
  {
    link: "https://x.com/simply_adeola",
    subText: "Follow me on Twitter for more updates",
    linkDescription: "X (formerly Twitter)",
    // icon: <Twitter sx={{ color: "#1DA1F2" }} />,
  },
  {
    link: "https://adeola-two.vercel.app/",
    subText: "Visit my personal website",
    linkDescription: "Portfolio",
    icon: <AssignmentIndIcon sx={{ color: " #dc2626" }} />,
  },
  {
    link: "/contact",
    subText: "Get in touch with me",
    linkDescription: "Contact Me",
    icon: <PermPhoneMsgIcon sx={{ color: "#4f46e5" }} />,
  },
];
export default Links;
