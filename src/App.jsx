import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Nav from "./components/Nav";
import Comments from "./components/Comments";
import User from "./components/User";
import Search from "./components/Search";
import Subreddit from "./components/Subreddit";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/r/:sub" element={<Subreddit />} />
          <Route path="/r/:sub/:sort" element={<Subreddit />} />
          <Route path="/r/:sub/comments/:id/:post/" element={<Comments />} />
          <Route path="/u/:user" element={<User />} />
          <Route path="/search" element={<Search />} />
          <Route path="/liked" element={<Posts liked={true} />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", marginBlock: "20px" }}>
                Page Does Not Exist 🚧
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
