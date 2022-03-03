import React, {useState} from "react"
import "../pages/Home.css";


export default class Home extends React.Component{
    render(){        
        return(
            <div className="home" id="Home">
            <div className="home__bg">
              <div className="header d__flex align__items__center pxy__30">        
                <div className="navigation pxy__30">
                  
                </div>
                {/* Toogle Menu */}
                <div className="toggle__menu">
                 
                </div>
                
              </div>
              {/* HOME CONTENT */}
              <div className="container">
                <div className="home__content">
                  <div className="home__meta">
                    <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
                    <h2 className="home__text pz__10">Hi, I’m rakatoneco</h2>
                    <h3 className="home__text sweet pz__10">Web Developer.</h3>
                    <h4 className="home__text pz__10">Based in Indonesia.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
// export default Home;