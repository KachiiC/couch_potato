import React from "react";
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SiteNavbar from "./Components/SiteNavbar";
// Data
import PageData from './Data/PagesData'

const App = () => {

  const myLinks = PageData.map((page, index) =>(
      <Route path={`/${page.page_path}`} key={index}>
          {page.page_display}
      </Route>
    )
  )

  return (

    <Router>
      <SiteNavbar />
        <Switch>
          <div className="App">
            {myLinks}
          </div>
        </Switch>
    </Router>
  );
}

export default App;
