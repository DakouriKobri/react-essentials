// NPM Packages
import { useState } from 'react';

// Project Imports
import CoreConcept from './components/core-concept';
import Header from './components/header';
import TabButton from './components/tab-button';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

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
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
