import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PageContent from './components/PageContent/PageContent';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
      <Header />
      <div className="page">
        <Sidebar />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
