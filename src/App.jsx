import './App.scss';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import ResultSection from './components/ResultSection/ResultSection';
import { useSelector } from 'react-redux';

function App() {

  return (
    <div className="app">
      <Header />
      <ResultSection />
      <Popup />
    </div>
  );
}

export default App;
