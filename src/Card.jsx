
import Profile from "./Profile";
import Links from "./content"
import ListItem from "./ListItem";
import Socials from "./socials";

export default function Card() {
  return <div>
    <Profile />
    <ul>
      {Links.map((text, index) => <ListItem 
      key= {index}
      id={text.id}
      link= {text.link}
      name= {text.linkDescription}
      title= {text.subText}
      />)}
    </ul>
    <Socials />
  </div>
}
