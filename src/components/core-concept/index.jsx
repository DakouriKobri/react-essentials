// Project Imports
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';

export default function CoreConcepts() {
  const coreConceptsList = CORE_CONCEPTS.map((coreConcept) => {
    return <CoreConcept key={coreConcept.title} {...coreConcept} />;
  });

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{coreConceptsList}</ul>
    </section>
  );
}
