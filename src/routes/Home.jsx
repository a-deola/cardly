
import Profile from "../components/Profile";
import Links from "../content"
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

export default function Main() {
  return <>
  <main>
  <Profile />
    <Grid container 
    direction="column" 
    justifyContent="center"
    alignItems="center"
    >
      {Links.map((text, index) => <ListItem
        key={index}
        link={text.link}
        name={text.linkDescription}
        title={text.subText}
      />)}
    </Grid>
  </main>
    <Footer />
  </>
}
