import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import FbSocred from './Components/FbSocred';
import Gallery from './Components/Gallery';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route path="/about">
              <FbSocred />
          </Route>
          <Route path="/gallery">
              <Gallery />
          </Route>
          <Route path="/"> 
              <MainPage/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
