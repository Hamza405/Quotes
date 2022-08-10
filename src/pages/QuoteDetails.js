import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const params = useParams();
    return <div>
        All QuoteDetails
        { params.quoteId }
        <Route path={ `/quotes/${ params.quoteId }/comments` }>
            <Comments />
        </Route>
    </div>;
};

export default QuoteDetails;