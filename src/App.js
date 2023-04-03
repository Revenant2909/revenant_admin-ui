import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Chart from "./components/chart/Chart";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
function App() {
  return (
    <Router>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">  <Home/>   </Route>
        <Route path="/users">  <UserList/>   </Route>
        <Route path="/user/:userId">  <User/>   </Route>
      </Switch>

      {/* <div className="others">Other pages</div> */}
    </div>
    </Router>
  );
}

export default App;
