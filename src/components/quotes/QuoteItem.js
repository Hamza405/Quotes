import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const QuoteItem = ( props ) => {
  const match = useRouteMatch();

  return (
    <li className={ classes.item }>
      <figure>
        <blockquote>
          <p>{ props.text }</p>
        </blockquote>
        <figcaption>{ props.author }</figcaption>
      </figure>
      <Link to={ `${ match.path }/${ props.id }` } className='btn'>VewFullscreen</Link>

    </li>
  );
};

export default QuoteItem;
