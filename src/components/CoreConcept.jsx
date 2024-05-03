export default function CoreConcept(props) {
  const { description, image, title } = props;

  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
