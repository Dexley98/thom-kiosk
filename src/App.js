import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "./photos/wu-logo.png"
import Message from "./components/Message"
import Logo from "./components/Logo"
import Button from "./components/Button"
import IDcheck from "./components/IDcheck"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><img className="logo-image" src={logo} alt="Old Winthrop Logo"/></Link>
            </li>
          </ul>
        </nav>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Display Logic for Pay to Enter Option */}
          <Route path="/pay-to-enter">
            <Logo />
            <Message line1="Please Choose an Option" />
            <Button destination="/inter-org" text="WU Faculty, Staff, and Students"/>
            <Button destination="/visitors" text="Vistors"/>
          </Route>

          <Route path="/inter-org">
            <Logo />
            <Message line1="Please Enter Your WU #" line2="We will send your receipt to the email on file for this Account." />
            <IDcheck />
            <Button destination="/staff" text="Faculty &amp; Staff"/>
            <Button destination="/students" text="Students"/>
          </Route>

          <Route path="/staff">
            {/* add Back, and Time*/}
            <Logo />
            <Message line1="Good Afternoon Gerry" line2="Please Choose an Option" />
            <Button destination="inter-org/staff/payment" text="Credit Card" money="($5.99)"/>
            <Button destination="/inter-org/staff/confirmation" text="Enter with Meal Plan"/>
            {/* add secondary exit */}
          </Route>

          <Route path="/students">
            <Logo />
            <Message line1="Good Afternoon Dom" line2="Please Choose an Option" />
            <Button destination="inter-org/student/payment" text="Credit Card" money="($9.99)"/>
            <Button destination="/inter-org/student/confirmation" text="Enter with Meal Plan"/>
          </Route>
          
          <Route path="/">
            <Logo />
            <Message line1="Welcome to Thomson Cafe"/>
            <Button destination="/users" text="Menu: Featured Item -- Chargrilled Hamburger" />
            <Button destination="/pay-to-enter" text="Pay to enter"/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}