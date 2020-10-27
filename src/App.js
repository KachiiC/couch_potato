import React from "react";
// Components
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// Data
import PageData from './Data/PagesData'
// CSS
import './App.css';

const App = () => {

  const myLinks = PageData.map((page, index) =>(
      <Route path={`/${page.page_path}`}>
          {page.page_display}
      </Route>
    )
  )

  return (

    <Router>
      <Switch>
        <div className="App">
          {myLinks}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
