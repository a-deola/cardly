
import Profile from "./Profile";
import Links from "../content"
import ListItem from "./ListItem";
import Socials from "./Socials";
import { Grid } from "@mui/material";

export default function Main() {
  return <div>
    <Profile />
    <Grid container 
    direction="column" 
    justifyContent="center"
    alignItems="center"
    >
      {Links.map((text, index) => <ListItem
        key={index}
        id={text.id}
        link={text.link}
        name={text.linkDescription}
        title={text.subText}
      />)}
      <Socials />
    </Grid>
  </div>
}
