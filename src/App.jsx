// Project Imports
import CoreConcepts from './components/core-concept';
import Examples from './components/example';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
