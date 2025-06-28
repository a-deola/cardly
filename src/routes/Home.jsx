import Profile from "../components/Profile";
import Links from "../content";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

export default function Main() {
  return (
    <>
      <main>
        <Profile />
        <div className="my-links-container">
          {Links.map((text, index) => (
            <ListItem
              key={index}
              link={text.link}
              name={text.linkDescription}
              title={text.subText}
              icon={text.icon || <></>}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
