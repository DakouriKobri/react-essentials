// NPM Packages
import { useState } from 'react';

// Project Imports
import CoreConcept from './components/core-concept';
import Header from './components/header';
import TabButton from './components/tab-button';
import { CORE_CONCEPTS, EXAMPLES, TABS_DATA } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const coreConceptsList = CORE_CONCEPTS.map((coreConcept) => {
    return <CoreConcept key={coreConcept.title} {...coreConcept} />;
  });

  const tabButtonsList = TABS_DATA.map((tab) => {
    const { id, title } = tab;
    return (
      <TabButton
        key={id}
        isSelected={selectedTopic === id}
        onSelect={() => handleSelect(id)}
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{coreConceptsList}</ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>{tabButtonsList}</menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
