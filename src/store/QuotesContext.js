import { createContext, useState } from "react";

const QuotesContext = createContext( {
    quotes: [],
    updateQuotes: ( newQuotes ) => { }
} );

export const QuoteProvider = ( props ) => {
    const [ quotes, setQuotes ] = useState( [] );

    const updateQuotesHandler = ( newQuotes ) => {
        setQuotes( newQuotes );
    };

    const state = {
        quotes: quotes,
        updateQuotes: updateQuotesHandler
    };

    return <QuotesContext.Provider value={ state }>
        { props.children }
    </QuotesContext.Provider>;
};

export default QuotesContext;