import React, {Component} from 'react';

class SignedIn extends Component{

    state = {
        email : '',
        password : ''
    };

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text tex-darken-3">SignIn</h5>
                    <div className="input-field">
                        <label htmlFor="email" >email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </form>
            </div>
        );
    }
}

export default SignedIn;

