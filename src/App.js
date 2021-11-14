import "./assets/styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Admin from "./screens/Admin";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin" component={Admin} />
      {/* <Route exact path="/users" component={Users} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/Reviews" component={Reviews} /> */}
    </Router>
  );
}

export default App;
