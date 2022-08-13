import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../services/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [ isAddingComment, setIsAddingComment ] = useState( false );
  const params = useParams();
  const { sendRequest, status, data: loadedData, error } = useHttp( getAllComments );
  const { quoteId } = params;

  useEffect( () => {
    sendRequest( quoteId );
  }, [ quoteId, sendRequest, error ] );

  const startAddCommentHandler = () => {
    setIsAddingComment( true );
  };
  const addedCommentHandler = useCallback( () => {
    sendRequest( quoteId );
  }, [ quoteId, sendRequest ] );

  let comments;


  if ( status === 'pending' )
  {
    console.log( loadedData );
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>;
  }

  if ( status === 'completed' && ( loadedData ) )
  {
    comments = <CommentsList comments={ loadedData } />;
  }

  if ( status === 'completed' && ( !loadedData || loadedData.length === 0 ) )
  {
    comments = <p className='centered'>No comments added yet!</p>;
  }

  return (
    <section className={ classes.comments }>
      <h2>User Comments</h2>
      { !isAddingComment && (
        <button className='btn' onClick={ startAddCommentHandler }>
          Add a Comment
        </button>
      ) }
      { isAddingComment && <NewCommentForm quoteId={ params.quoteId } onAddedComment={ addedCommentHandler } /> }
      { comments }
    </section>
  );
};

export default Comments;
