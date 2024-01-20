import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import CreateURL from './components/CreateURL';
import ShowURLs from './components/ShowURLs';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create-url" component={CreateURL} />
                <Route path="/show-urls" component={ShowURLs} />
            </Switch>
        </Router>
    );
}

export default App;
