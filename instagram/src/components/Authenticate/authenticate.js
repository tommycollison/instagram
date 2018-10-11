import React from 'React';
import Login from './../Login/login';

const Authenticate = (App) =>
    class extends React.Component { 
        constructor() {
        super()
    
          
    this.state = {
        loggedIn: false,
    }
}
    componentDidMount() { 
        if (!localStorage.getItem('user')) { 
            this.setState({loggedIn: false})
        } else {
            this.setState({loggedIn: true})
        }
    }

    render () {
        if (this.state.loggedIn) return <App />;
        return <Login /> 
        }
}

export default Authenticate;