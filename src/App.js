import React, { Component } from "react";
import AppTopBar from "./components/include/Header";
import DemoHome from "./components/DemoHome";
import ErrorComponent from './components/ErrorPage';
import { appBody } from './utils/AppStyle';
import { Route, Switch, withRouter } from "react-router";
import { getTitle } from "./Config";
import { isNullOrEmpty } from "./utils/appUtil";

class App extends Component {

  constructor(props) {

    let url_string = window.location.href;
    let url = new URL(url_string);
    let params = url.searchParams;
    let reloaded = sessionStorage.getItem('reloaded');
    if (!isNullOrEmpty(params)) {
      let themeId = params.get("theme_id", "");
      sessionStorage.setItem("theme_id", themeId);
      if (reloaded !== "true") {
        sessionStorage.setItem('reloaded', 'true');
        window.location.reload();
      }
      else {
        sessionStorage.setItem('reloaded', 'false');
      }
    }

    document.title = getTitle();


    super(props);
    this.state = {
      isAuthenticated: false
    }
    this.currentPathname = null;
    this.currentSearch = null;
  }

  componentDidMount = () => {
    const { history } = this.props;

    history.listen((newLocation, action) => {
      if (action === "PUSH") {
        if (
          newLocation.pathname !== this.currentPathname ||
          newLocation.search !== this.currentSearch
        ) {
          // Save new location
          this.currentPathname = newLocation.pathname;
          this.currentSearch = newLocation.search;

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search
          });
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1);
      }
    });
  }

  render() {
    return (
      <div style={appBody}>
        <AppTopBar />
        <Switch>
          <Route exact path="/" component={DemoHome} />
          <Route path="/demohome" component={DemoHome} />
          <Route path="/error" component={ErrorComponent} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);