import './App.css';
import RatingSystem from './components/RatingSystem';
import TrailerPage from './components/TrailerPage';

function App() {
  return (
    <div className="App">
      {<TrailerPage />}
     {<RatingSystem />}
    </div>
  );
}

export default App;
