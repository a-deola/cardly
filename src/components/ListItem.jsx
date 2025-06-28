export default function ListItem(props) {
  return (
    <a
      className="my-links"
      target="_blank"
      rel="noopener noreferrer"
      title={props.title}
      href={props.link}
    >
      {props.name}
      <span>{props.icon}</span>
    </a>
  );
}
