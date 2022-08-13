import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quotes from './pages/Quotes';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const QuoteDetails = React.lazy( () => import( './pages/QuoteDetails' ) );
const NewQuote = React.lazy( () => import( './pages/NewQuotes' ) );
const NotFound = React.lazy( () => import( './pages/NotFound' ) );


function App () {
  return <Layout>
    <Suspense fallback={ <div className='centered'><LoadingSpinner /></div> }>
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
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </Layout>;
}

export default App;
