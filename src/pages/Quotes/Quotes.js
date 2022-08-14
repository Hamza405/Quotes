import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import QuotesPage from '../../pages/Quotes/QuotesPage';
import Layout from '../../components/layout/Layout';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import NewQuote from './NewQuotes';
import QuoteProvider from "../../store/QuotesProvider";


const QuoteDetails = React.lazy( () => import( './QuoteDetails' ) );
const NotFound = React.lazy( () => import( './NotFound' ) );

const Quotes = () => {
    return <QuoteProvider>
        <Layout>
            <Suspense fallback={ <div className='centered'><LoadingSpinner /></div> }>
                <Switch>
                    <Route path='/home' exact>
                        <Redirect to='/home/quotes' />
                    </Route>
                    <Route path='/home/quotes' exact>
                        <QuotesPage />
                    </Route>
                    <Route path='/home/quotes/:quoteId' >
                        <QuoteDetails />
                    </Route>
                    <Route path='/home/new-quote'>
                        <NewQuote />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>;
    </QuoteProvider>;
};

export default Quotes;