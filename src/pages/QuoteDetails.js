import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const data = [
    { id: '1', author: 'Hamza', text: 'Leargning programing' },
    { id: '2', author: 'Ali', text: 'Leargning React bebe' }
];


const QuoteDetails = () => {
    const params = useParams();
    const quote = data.find( q => q.id === params.quoteId );
    if ( !quote )
    {
        return <p>No Quote Found</p>;
    }
    return <div>
        <HighlightedQuote
            author={ quote.author }
            text={ quote.text } />
        <Route path={ `/quotes/${ params.quoteId }/comments` }>
            <Comments />
        </Route>
    </div>;
};

export default QuoteDetails;