import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import { getSingleQuote } from "../../services/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const QuoteDetails = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { sendRequest, status, data: loadedData, error } = useHttp( getSingleQuote, true );

    useEffect( () => {
        sendRequest( params.quoteId );
    }, [ sendRequest, params.quoteId ] );

    if ( status === 'pending' )
    {
        return <div className="centered">
            <LoadingSpinner />
        </div>;
    }

    if ( error )
    {
        return <p className="centered">{ error }</p>;
    }

    if ( !loadedData.text )
    {
        return <p>No Quote Found</p>;
    }

    return <div>
        <HighlightedQuote
            author={ loadedData.author }
            text={ loadedData.text } />
        <Route path={ match.url } exact>
            <div className="centered"><Link className="btn--flat" to={ `${ match.url }/comments` }>Load comments</Link></div>
        </Route>

        <Route path={ `${ match.path }/comments` }>
            <Comments />
        </Route>
    </div>;
};

export default QuoteDetails;