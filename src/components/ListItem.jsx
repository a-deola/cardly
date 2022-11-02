
export default function ListItem (props){
    return  <a className= "my_links" target="_blank" rel="noopener noreferrer" title={props.title} id= {props.id} href= {props.link}>{props.name}</a>
}