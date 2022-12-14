import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Home from './components/pages/Home';
import NoMatch from './components/pages/NoMatch';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import CreateJournalEntry from './components/pages/CreateJournalEntry';
import JournalEntries from './components/pages/JournalEntries';
import Disclaimer from './components/pages/Disclaimer';
// import Success from './pages/Success'




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

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
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/CreateJournalEntry" component={CreateJournalEntry} />
            <Route exact path="/JournalEntries" component={JournalEntries} />
            <Route exact path="/Disclaimer" component={Disclaimer} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
