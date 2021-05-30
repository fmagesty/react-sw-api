import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Ships from "./Pages/Ships";
import Characters from "./Pages/Characters";
import Planets from "./Pages/Planets";
import Footer from "./Components/Footer";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/react-sw-api">
            <Link to="/react-sw-api">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={process.env.PUBLIC_URL + "/ships"}>Ships</Link>
            <Link to={process.env.PUBLIC_URL + "/characters"}>Characters</Link>
            <Link to={process.env.PUBLIC_URL + "/planets"}>Planets</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <Switch>
          <Route exact path="/react-sw-api">
            <Homepage />
            <Footer />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/react-sw-api/ships"}>
            <Ships />
            <Footer />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/react-sw-api/characters"}>
            <Characters />
            <Footer />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/react-sw-api/planets">}
            <Planets />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
