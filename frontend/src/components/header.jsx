import React from 'react';
import './header.scss'

class Header extends React.Component{

    render(){
        return (
          <>
            <div className="header">
              <div className="headerTitle">
                <div className="title">{"The Harbour House"}</div>
                <div className="title2">{"Bed and Breakfast Hotel"}</div>
              </div>
            </div>
          </>
        );
    }
}

export default Header