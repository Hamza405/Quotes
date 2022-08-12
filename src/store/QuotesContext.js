import { createContext } from "react";

const QuotesContext = createContext( {
    quotes: [],
    updateQuotes: ( newQuotes ) => { }
} );

export default QuotesContext;