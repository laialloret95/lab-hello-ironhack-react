import './App.css';
import Declarative from './components/Cards/Declarative/Declarative';
import Components from './components/Cards/Components/Components';
import JSX from './components/Cards/JSX/JSX';
import SingleWay from './components/Cards/SingleWay/SingleWay';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <main>
    <Header />
    <CardContainer>
        <Declarative />
        <Components />
        <SingleWay />
        <JSX />
    </CardContainer>
  </main>
  );
}

export default App;
