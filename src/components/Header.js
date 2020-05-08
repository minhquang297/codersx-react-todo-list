import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className='container' style={style}>
                <div>
                    Go back
                </div>
                <div>
                    Coders X
                </div>
                <button>Sign Up</button>
            </div>
        );
    }
}
const style = {
    margin: 20,
    
  
};
export default Header;
