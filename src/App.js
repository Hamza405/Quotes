import { Route, Switch, Redirect } from 'react-router-dom';
import NewQuote from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';
import Quotes from './pages/Quotes';
import Layout from './components/layout/Layout';


function App () {
  return <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path='/quotes' exact>
        <Quotes />
      </Route>
      <Route path='/quotes/:quoteId' >
        <QuoteDetails />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
