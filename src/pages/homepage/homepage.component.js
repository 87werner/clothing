import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const HomePage = () => {
return(
  <div className="homepage">
      <Directory/>
  </div>)
};

export default HomePage;

//this has now been replaced by the Directory component above
/* <div className="directory-menu">
<div className="menu-item">
    <div className="content">
       <h1 className="title"> HATS</h1>
       <span className="subtile"> SHOP NOW</span>

    </div>
</div>

<div className="menu-item">
    <div className="content">
       <h1 className="title"> JACKETS</h1>
       <span className="subtile"> SHOP NOW</span>

    </div>
</div>

<div className="menu-item">
    <div className="content">
       <h1 className="title"> SNEAKERS </h1>
       <span className="subtile"> SHOP NOW</span>

    </div>
</div>

<div className="menu-item">
    <div className="content">
       <h1 className="title"> WOMENS </h1>
       <span className="subtile"> SHOP NOW</span>

    </div>
</div>

<div className="menu-item">
    <div className="content">
       <h1 className="title"> MENS </h1>
       <span className="subtile"> SHOP NOW</span>

    </div>
</div>




</div> */