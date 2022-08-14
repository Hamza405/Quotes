import QuoteForm from '../../components/quotes/QuoteForm';
import { useHistory } from "react-router-dom";
import useHttp from '../../hooks/use-http';
import { addQuote } from "../../services/api";
import { useEffect } from 'react';


const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp( addQuote );
    console.log( 'jad' );

    useEffect( () => {
        if ( status === 'completed' )
        {
            history.replace( '/quotes' );
        }
    }, [ status, history ] );

    const addQuoteHandler = ( data ) => {
        sendRequest( data );
    };

    return <QuoteForm isLoading={ status === 'pending' } onAddQuote={ addQuoteHandler } />;
};

export default NewQuote;