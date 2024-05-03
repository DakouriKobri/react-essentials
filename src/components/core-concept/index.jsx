// Project Imports
import './CoreConcept.css';

export default function CoreConcept(coreConcept) {
  const { description, image, title } = coreConcept;

  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
