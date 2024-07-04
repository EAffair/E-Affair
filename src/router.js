import { Route, Switch, Redirect, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrimarySearchAppBar from "./navbar";
import Homepage from "./app/Pages/homepage";
import Aboutpage from "./app/Pages/about";
import Servicepage from "./app/Pages/service";
import ContactPage from "./app/Pages/contact";
import Navbar from "./navbar";
import Footer from "./app/Components/footer";


export default function AppRouter() {
    return (
      <>
        {/* <Router> */}
          <Switch>
        
            <Route exact path="/EventAffair/" component={Homepage} />
            <Route path="/EventAffair/services" component={Servicepage} />
            <Route path="/EventAffair/about" component={Aboutpage} />
            <Route path="/EventAffair/contact" component={ContactPage} />
            
          </Switch>
          <Navbar />
        {/* </Router> */}
        <Footer />
      </>
    )
}