import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";

function Home(){
  return <h2>Home</h2>;
}

function About(){
  return <h2>About</h2>;
}

function Topics() {
  let match = useMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to={`${match.url}/dogs`}>
            Dogs
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Routes>

    </div>
  );
}

function Topic(){
  let {topicId} = useParams();
  return <h3>Requested topic ID: {topicId}</h3>
}

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/about" element={ <About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  );
}



