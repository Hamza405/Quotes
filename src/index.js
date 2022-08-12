import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import QuoteProvider from "./store/QuotesProvider";

ReactDOM.render( <QuoteProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</QuoteProvider>, document.getElementById( 'root' ) );
