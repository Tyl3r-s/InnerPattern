import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './components/pages/Home';
// import Home from './pages/Home';
import NoMatch from './components/pages/NoMatch';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import JoinUs from './components/pages/JoinUs';
import Nav from './components/index';
import Footer from './components/pages/Footer';
// import Success from './pages/Success'


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});
// store provider replaced with Redux in index.js
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/JoinUs" component={JoinUs} />
            <Route component={NoMatch} />
          </Switch>
        
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
