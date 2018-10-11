import React, {Component} from 'react';

class Login extends Component { 
    constructor(props) { 
        super(props)

        this.setState = { 
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
            <form onSubmit={this.login}>
            <input
                name="username"
                placeholder="J-o-h-n"
                type="text"
                value={this.setState.username} />
            <input 
                name="password"
                placeholder="S-p-r-a-u-l"
                type="text"
                value={this.setState.password} />
            <button><p>Come see some cat pics, John Spraul</p></button>

            
            </form>
        )
    }
}



export default Login;