import React, {Component} from 'react';
import { Alert } from 'reactstrap';


class Login extends Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleLoginSubmit = (event) => { 
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() { 
        return ( 
            <div className="loginWrap">
            <form onSubmit={this.handleLoginSubmit}>
             <input
                name="username"
                placeholder="J-o-h-n"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange} />
            <input 
                name="password"
                placeholder="S-p-r-a-u-l"
                type="text"
                value={this.state.password}
                onChange={this.handleInputChange} />
            <button><p>Come see some cat pics, John Spraul</p></button>
            </form>
            </div>
        )
    }
}



export default Login;