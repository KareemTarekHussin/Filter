import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Desktop from "./components/Desktop";
import AddUser from "./components/addUser";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
<Router>
      <Routes>
        <Route path="" element={ <Desktop/>} />
        <Route path="/Desktop" element={ <Desktop />} />
        <Route path="/addUser" element={ <AddUser />} />
      </Routes>
    </Router>
</>
  );
}

export default App;
