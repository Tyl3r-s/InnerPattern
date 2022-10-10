import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './components/pages/Home';
import NoMatch from './components/pages/NoMatch';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import CreateJournalEntry from './components/pages/CreateJournalEntry';
import JournalEntries from './components/pages/JournalEntries';
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
  cache: new InMemoryCache()
});

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// store provider replaced with Redux in index.js
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/CreateJournalEntry" component={CreateJournalEntry} />
            <Route exact path="/JournalEntries" component={JournalEntries} />
            <Route component={NoMatch} />
          </Switch>
        
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
