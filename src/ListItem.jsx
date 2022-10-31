

export default function ListItem (props){
    return <li> <a target= "_blank" title={props.title} id= {props.id} href= {props.link}>{props.name}</a></li>
}