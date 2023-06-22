import {IonApp} from '@ionic/react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import PageNotFound from './pages/PageNotFound';

import './theme/dashboard.css'

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  console.log(`rendering App with loggedIn = ${loggedIn}`)

  return (
    <AuthContext.Provider value={{loggedIn}}>
      <IonApp>
        <IonReactRouter>
          <Switch>
            <Route exact path='/login'> 
              <LoginPage 
              onLogin={() => {setLoggedIn(true)}} 
              />
            </Route>
            <Route path='/my' >
              <AppTabs />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
            <Redirect exact path='/' to='/my/dashboard' />
          </Switch>
        </IonReactRouter>
      </IonApp>
    </AuthContext.Provider>
  );
};

export default App;
