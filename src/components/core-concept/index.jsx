// Project Imports
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';
import Section from '../Section';

export default function CoreConcepts() {
  const coreConceptsList = CORE_CONCEPTS.map((coreConcept) => {
    return <CoreConcept key={coreConcept.title} {...coreConcept} />;
  });

  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>{coreConceptsList}</ul>
    </Section>
  );
}
