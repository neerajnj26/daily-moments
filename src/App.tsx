import {IonApp} from '@ionic/react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{loggedIn}}>
      <IonApp>
        <IonReactRouter>
          <Switch>
            <Route exact path='/login'> 
              <LoginPage 
              loggedIn = {loggedIn}
              setLoggedIn={setLoggedIn}
              />
            </Route>
            <Route path='/my' >
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/dashboard' />
          </Switch>
        </IonReactRouter>
      </IonApp>
    </AuthContext.Provider>
  );
};

export default App;
