import { IonIcon, IonLabel, IonMenu, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home as homeIcon, call as callIcon, book as bookIcon, newspaper as newspaperIcon } from 'ionicons/icons'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth';
import CreateConf from './pages/CreateConf';
import Contacts from './pages/Contacts';
import './theme/dashboard.css'
import ConferenceTemplate from './pages/ConferenceTemplate';
import Dashboard from './pages/Dashboard';


const AppTabs: React.FC = () => {

  const { loggedIn } = useAuth()

  if (!loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/my/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/my/call'>
          <CreateConf />
        </Route>
        <Route exact path='/my/contacts'>
          <Contacts />
        </Route>
        <Route exact path='/my/conference-templates'>
          <ConferenceTemplate />
        </Route>
      </IonRouterOutlet>

      <IonTabBar className='tab-bar' slot='bottom'>
        <IonTabButton tab='home' href='/my/dashboard'>
          <IonIcon icon={homeIcon} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab='call' href='/my/call'>
          <IonIcon icon={callIcon} />
          <IonLabel>Create Conference</IonLabel>
        </IonTabButton>
        <IonTabButton tab='contacts' href='/my/contacts'>
          <IonIcon icon={bookIcon} />
          <IonLabel>Contacts</IonLabel>
        </IonTabButton>
        <IonTabButton tab='conference-templates' href='/my/conference-templates'>
          <IonIcon icon={newspaperIcon} />
          <IonLabel>Conference Templates</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
