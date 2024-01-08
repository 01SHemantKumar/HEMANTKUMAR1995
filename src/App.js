import Home from "./Screens/Home";
// In the below import we are importing react-router-dom to avoid reloading of the page
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/js/bootstrap.dundle.min.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
