import React from 'react';
import './header.scss'

class Header extends React.Component{

    render(){
        return (
          <>
            <div className="header">
              <div className="headerTitle">
                <div>{"The Harbour House"}</div>
                <div>{"Bed and Breakfast Hotel"}</div>
              </div>
            </div>
          </>
        );
    }
}

export default Header