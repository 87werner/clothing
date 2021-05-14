import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import "./header.component.styles.scss";

const Header = ({ currentUser, hidden }) => {
  //FOR the drop down menu
  // const [toggleCart,  setToggleCart] = useState
  // (false);

  //   let handleClickCart = () => {
  //  console.log(toggleCart)
  //     setToggleCart(!toggleCart)
  //   }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN
          </Link>
        )}
        <CartIcon // for dropdown onClick={() => {handleClickCart()}}
        />
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
};
//state value come from top level root reducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
//connect is HOC
export default connect(mapStateToProps)(Header);
