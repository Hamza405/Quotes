import { Fragment, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuotesContext from '../../store/QuotesContext';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = ( quotes, ascending ) => {
  return quotes.sort( ( quoteA, quoteB ) => {
    if ( ascending )
    {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else
    {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  } );
};

const QuoteList = ( props ) => {
  const history = useHistory();
  const location = useLocation();
  const qureyParams = new URLSearchParams( location.search );
  const quotesState = useContext( QuotesContext );


  const changeSortingHandler = () => {
    const sufix = qureyParams.get( 'sort' ) === 'asc' ? 'des' : 'asc';
    history.push( {
      pathname: location.pathname,
      search: `?sort=${ sufix }`
    } );
  };

  const sortedList = sortQuotes( quotesState.quotes, qureyParams.get( 'sort' ) === 'asc' );
  return (
    <Fragment>
      <div className={ classes.sorting }>
        <button onClick={ changeSortingHandler }>Sort { qureyParams.get( 'sort' ) === 'asc' ? 'Descending' : 'Ascending' }</button>
      </div>
      <ul className={ classes.list }>
        { sortedList.map( ( quote ) => (
          <QuoteItem
            key={ quote.id }
            id={ quote.id }
            author={ quote.author }
            text={ quote.text }
          />
        ) ) }
      </ul>
    </Fragment>
  );
};

export default QuoteList;
