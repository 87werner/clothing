import React from "react";
import { Route, Switch } from "react-router-dom";
import {connect } from 'react-redux';

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.js";
import ShopPage from "./pages/shop/shop.component.js";
import Header from "./components/header/header.component.js";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import {auth, createUserProfileDocument} from "../src/firebase/firebase.utils.js";
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
                id: snapShot.id,
                ...snapShot.data(),
              
            });
         
        });
      } 
      setCurrentUser (userAuth );
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header //currentUser={this.state.currentUser} no longer needed, root.reducer is getting state.currentUser from the user.reducer via connect via mapStateToProps() 
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
