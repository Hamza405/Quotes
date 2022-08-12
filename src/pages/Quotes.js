import { useContext, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../services/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound.js";
import QuotesContext from "../store/QuotesContext";

const Quotes = () => {
    const { sendRequest, status, data: loadedQuote, error } = useHttp( getAllQuotes, true );
    const quotesContext = useContext( QuotesContext );

    useEffect( () => {
        sendRequest();
    }, [ sendRequest ] );

    useEffect( () => {
        if ( status === "completed" )
        {
            quotesContext.updateQuotes( loadedQuote );
        }
    }, [ status, loadedQuote, quotesContext ] );

    if ( status === 'pending' )
    {
        return <div className="centered">
            <LoadingSpinner />
        </div>;
    }

    if ( error )
    {
        return <p className='centered focused'>{ error } </p>;
    }

    if ( status === "completed" )
    {

        return <QuoteList />;
    }

    return <NoQuotesFound />;


};

export default Quotes;