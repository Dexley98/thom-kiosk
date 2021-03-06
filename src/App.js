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
      <div className="App">

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
            <Message line1="Please Choose an Option" />
            <Button classy="left-button" destination="/school-group" text="School Group"/>
            <Button classy="right-button" destination="/individual" text="Individual" money="($9.99)"/>
          </Route>

          <Route path="/school-group">
            <Back destination="/visitors" />
            <Time />
            <Logo />
            <Message line1="How many in your group?" h1Class="school-h1"/>
            <Group />
            <Button classy="group-button" destination="/school-payment" text="Proceed to Payment"/>
            <Exit destination="/" />
          </Route>

          <Route path="/school-payment">
            <Back destination="/school-group" />
            <Time />    
            <Logo />
            <Message line1="Enter Your Card Information" h1Class="payment-h1"/>
            <Form needEmail={true} />
            <Button classy="solo-form" destination="/school-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/school-confirmation">
            <Time />   
            <Logo />
            <Message line1="Thank you Griffin!" h1Class="confirmation-h1" line2="a receipt of your purchase of $499.50 has been sent to:" h2Class="confirmation-h2" email="griffin.busbee@teacherman.com"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/individual">
            <Back destination="/visitors" />
            <Time />
            <Logo />
            <Message line1="Enter Your Card Information" h1Class="payment-h1"/>
            <Form needEmail={true} />
            <Button classy="solo-form" destination="/individual-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/individual-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Betty!" h1Class="confirmation-h1" line2="a receipt of your purchase of $9.99 has been sent to:" h2Class="confirmation-h2" email="admin@bettyskitchen.com"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>
          
          <Route path="/inter-org">
            <Back destination="/pay-to-enter" />
            <Time />
            <Logo />
            <Message line1="Please Enter Your WU #" h1Class="inter-org-h1" line2="We will send your receipt to the email on file for this Account." h2Class="inter-org-h2" />
            <IDcheck />
            <Button classy="left-button-interorg" destination="/staff" text="Faculty &amp; Staff"/>
            <Button classy="right-button-interorg" destination="/students" text="Students"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff">
            <Back destination="/inter-org" />
            <Time />
            <Logo />
            <Message line1="Good Afternoon Gerry" h1Class="staff-h1" line2="Please Choose an Option" h2Class="student-staff-h2"/>
            <Button classy="left-button-student-staff" destination="/staff-payment" text="Credit Card" money="($5.99)"/>
            <Button classy="right-button-student-staff" destination="/staff-confirmation" text="Enter with Meal Plan"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff-payment">
            <Back destination="/staff" />
            <Time />
            <Logo />
            <Message line1="Enter Your Card Information" h1Class="payment-h1"/>
            <Form needEmail={false}/>
            <Button classy="solo-form" destination="/staff-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/staff-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Gerry!" h1Class="confirmation-h1" line2="a receipt of your purchase of $9.99 has been sent to:" h2Class="confirmation-h2" email="derkseng@winthrop.edu"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/students">
            <Back destination="/inter-org" />
            <Time />
            <Logo />
            <Message line1="Good Afternoon Dom" h1Class="student-h1" line2="Please Choose an Option" h2Class="student-staff-h2"/>
            <Button classy="left-button-student-staff" destination="/student-payment" text="Credit Card" money="($9.99)"/>
            <Button classy="right-button-student-staff" destination="/student-confirmation" text="Enter with Meal Plan"/>
            <Exit destination="/" />
          </Route>

          <Route path="/student-payment">
            <Back destination="/students" />
            <Time />
            <Logo />
            <Message line1="Enter your Card Information" h1Class="payment-h1"/>
            <Form needEmail={false}/>
            <Button classy="solo-form" destination="/student-confirmation" text="Submit"/>
            <Exit destination="/" />
          </Route>

          <Route path="/student-confirmation">
            <Time />
            <Logo />
            <Message line1="Thank you Dom!" h1Class="confirmation-h1" line2="a receipt of your purchase of $9.99 has been sent to:" h2Class="confirmation-h2" email="exleyd2@winthrop.edu"/>
            <Turnstile />
            <Exit destination="/" />
          </Route>

          <Route path="/">
            <Time />
            <Logo />
            <Message line1="Welcome to Thomson Cafe"/>
            <Button classy="solo" destination="/pay-to-enter" text="Pay to enter"/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
