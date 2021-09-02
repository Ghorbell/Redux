import './App.css';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import ListTask from './components/ListTask';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        
          <AddTask />
          <Filter />
          <ListTask />
        
      </div>
    </div>
  );
}

export default App;
