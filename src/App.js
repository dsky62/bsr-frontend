import React from 'react';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/admin' component={AdminDashboard} />
                {/* other routes */}
            </Switch>
        </Router>
    );
}

export default App;