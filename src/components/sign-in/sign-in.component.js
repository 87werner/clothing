import React from "react";
import "./sign-in.component.styles.scss";
import FormInput from "../form-input/form-input.component.js";
import CustomButton from "../custom-button/custom-button.component.js";
import {auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

 const {email, password} = this.state;

 try {
   auth.signInWithEmailAndPassword(email, password);
   this.setState({ email: "", password: "" });
 } catch (error) {
    console.log(error)
 }
};

  handleChange = (e) => {
     
    const { value, name } = e.target;
    this.setState({ [name]: value }); //name is a property accessors, access the event object's properties
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange} // we call handleChange takes the e.target object, and destructures the value and name. we then use its name and value to set the state , handle change is now dynamic
            label="password"
            required
          />
          {/* type='submit links up with the forms onSubmit function, when it is clicked */}
          <div className="button">
          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSigIn>
            Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
