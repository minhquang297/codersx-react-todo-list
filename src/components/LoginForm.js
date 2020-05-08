import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider >
                    <div style={{ fontSize: 50, marginTop: 50 }}>SIGN IN</div>
                    <div>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                        />
                        <br />
                        <RaisedButton label="Sign in to Coders-x" primary={true} style={style} />
                    </div>
                    <label style={{ color: '#a3a3a3' }}>
                        <input style={{ margin: 10 }}
                            type="checkbox"
                        />   
                          Keep me signed in
                    </label>
                    <div>
                    <a style={{ margin: 10 }}>Forgot username?</a>
                    <a style={{ margin: 10 }}>Forgot password?</a>
                    </div>
                    

                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 20,
};
export default LoginForm;
