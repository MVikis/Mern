import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './style.scss'
import {Home} from './components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <br/>
      <Route path="/" exact component={Home} />
      {/* <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
