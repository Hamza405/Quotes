import React, { Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';
import LoginPage from './pages/Auth/LoginPage';
import NotFound from './pages/Quotes/NotFound';
import AuthContext from './store/AuthContext';

const Qoutes = React.lazy( () => import( './pages/Quotes/Quotes' ) );
const SignupPage = React.lazy( () => import( './pages/Auth/SignupPage' ) );


function App () {
  const auth = useContext( AuthContext );
  return <Suspense fallback={ <div className='centered'><LoadingSpinner /></div> }>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Route path='/signup' >
        <SignupPage />
      </Route>
      <Route path='/home'>
        { auth.isAuth && <Qoutes /> }
        { !auth.isAuth && <Redirect to="/login" /> }
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Suspense>;
}

export default App;
