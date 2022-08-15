import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';
import LoginPage from './pages/Auth/LoginPage';

const Qoutes = React.lazy( () => import( './pages/Quotes/Quotes' ) );
const SignupPage = React.lazy( () => import( './pages/Auth/SignupPage' ) );


function App () {
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
      {/* <Route path='/forgetpassword' >
        <SignupPage />
      </Route> */}
      <Route path='/home'>
        <Qoutes />
      </Route>
    </Switch>
  </Suspense>;
}

export default App;
