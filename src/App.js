import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Message from "./components/Message"
import Logo from "./components/Logo"
import Button from "./components/Button"
import IDcheck from "./components/IDcheck"
import Form from "./components/Form"
import Turnstile from "./components/Turnstile"
import Group from "./components/Group"
import Time from "./components/Time"
import Back from "./components/Back"
import Exit from "./components/Exit"

import PayToEnter from "./components/PayToEnter"

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Display Logic for Pay to Enter Option */}
          <Route path="/pay-to-enter">
            <PayToEnter />
          </Route>

          <Route path="/visitors">
            <Back destination="/pay-to-enter"/>
            <Time />  
            <Logo />
            <Message line1="Plese Choose an Option" />
            <Button destination="/school-group" text="School Group"/>
            <Button destination="/individual" text="Individual" money="($9.99)"/>
          </Route>

          <Route path="/school-group">
            <Back destination="/visitors" />
            <Time />
            <Logo />
            <Message line1="How many are in your group?" />
            <Group />
            <Button destination="/school-payment" text="Proceed to Payment"/>
            <Exit destination="/" />
          </Route>

          <Route path="/school-payment">
            <Back destination="/school-group" />
            <Time />    
            <Logo />
            <Message line1="Enter Your Card Information" />
            <Form needEmail={true} />
            <Button destination="/school-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/school-confirmation">
            <Time />   
            <Logo />
            <Message line1="Thank you Griffin!" line2="a receipt of your purchase of $499.50 has been sent to:" email="griffin.busbee@teacherman.com"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/individual">
            <Back destination="/visitors" />
            <Time />
            <Logo />
            <Message line1="Enter Your Card Information" />
            <Form needEmail={true} />
            <Button destination="/individual-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/individual-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Betty!" line2="a receipt of your purchase of $9.99 has been sent to:" email="admin@bettyskitchen.com"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>
          
          <Route path="/inter-org">
            <Back destination="/pay-to-enter" />
            <Time />
            <Logo />
            <Message line1="Please Enter Your WU #" line2="We will send your receipt to the email on file for this Account." />
            <IDcheck />
            <Button destination="/staff" text="Faculty &amp; Staff"/>
            <Button destination="/students" text="Students"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff">
            <Back destination="/inter-org" />
            <Time />
            <Logo />
            <Message line1="Good Afternoon Gerry" line2="Please Choose an Option" />
            <Button destination="/staff-payment" text="Credit Card" money="($5.99)"/>
            <Button destination="/staff-confirmation" text="Enter with Meal Plan"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff-payment">
            <Back destination="/back" />
            <Time />
            <Logo />
            <Message line1="Enter Your Card Information" />
            <Form needEmail={false}/>
            <Button destination="/staff-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Gerry!" line2="a receipt of your purchase of $9.99 has been sent to:" email="derkseng@winthrop.edu"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/students">
            <Back destination="/inter-org" />
            <Time />
            <Logo />
            <Message line1="Good Afternoon Dom" line2="Please Choose an Option" />
            <Button destination="/student-payment" text="Credit Card" money="($9.99)"/>
            <Button destination="/student-confirmation" text="Enter with Meal Plan"/>
            <Exit destination="/" />
          </Route>

          <Route path="/student-payment">
            <Back destination="/students" />
            <Time />
            <Logo />
            <Message line1="Enter your Card Information" />
            <Form needEmail={false}/>
            <Button destination="/student-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/student-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Dom!" line2="a receipt of your purchase of $9.99 has been sent to:" email="exleyd2@mailbox.winthrop.edu"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/">
            <Time />
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
