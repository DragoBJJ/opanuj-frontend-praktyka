import './App.css';
import { FactoryContainer } from './containers/FactoryContainer';
import { ModeSwitch } from './components/molecules/ModeSwitch';
import { CountriesProvider } from './context/CountriesApiContext';

function App() {
  return (
    <div>
      <CountriesProvider>
        <ModeSwitch />
        <FactoryContainer />
      </CountriesProvider>
    </div>
  );
}

export default App;
