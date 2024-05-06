// NPM Packages
import { useState } from 'react';

// Project Imports
import { EXAMPLES, TABS_DATA } from '../../data';
import Section from '../Section';
import TabButton from '../tab-button';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const tabButtonsList = TABS_DATA.map((tab) => {
    const { id, title } = tab;
    return (
      <TabButton
        key={id}
        isSelected={selectedTopic === id}
        onClick={() => handleSelect(id)}
      >
        {title}
      </TabButton>
    );
  });

  let tabContent = <p>Please, select a Topic.</p>;
  if (selectedTopic) {
    const { code, description, title } = EXAMPLES[selectedTopic];
    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <menu>{tabButtonsList}</menu>
      {tabContent}
    </Section>
  );
}
