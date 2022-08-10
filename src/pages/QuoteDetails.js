import { useParams } from "react-router-dom";

const QuoteDetails = () => {
    const params = useParams();
    return <div>
        All QuoteDetails
        { params.quoteId }
    </div>;
};

export default QuoteDetails;