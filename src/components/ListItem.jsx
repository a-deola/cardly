export default function ListItem(props) {
  return (
    <a className="my-links" title={props.title} href={props.link}>
      {props.name}
      <span>{props.icon}</span>
    </a>
  );
}
