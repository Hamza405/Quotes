import QuoteList from "../components/quotes/QuoteList";

const data = [
    { id: '1', author: 'Hamza', text: 'Leargning programing' },
    { id: '2', author: 'Ali', text: 'Leargning React bebe' }
];

const Quotes = () => {
    return <QuoteList quotes={ data } />;
};

export default Quotes;