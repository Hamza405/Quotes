import { useState } from "react";
import QuotesContext from "./QuotesContext";

const QuoteProvider = ( props ) => {
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

export default QuoteProvider;