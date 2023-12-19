import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav brand="EpiBooks!"/>
      <Welcome variant="bg-info"/>
      <AllTheBooks>
        
      </AllTheBooks>
      <MyFooter h6Text="Ultimi libri letti" parTextTitolo="" parTextAutore=""></MyFooter>
    </div>
  );
};

export default App;
