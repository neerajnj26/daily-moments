import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import LoginBox from './LoginBox';
import JoinConference from './JoinConference';
import { useState } from 'react';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin}) => {

  const [showJoinConference, setShowJoinConference] = useState(false);

  const handleJoinConferenceClick = () => {
    setShowJoinConference(true);
  };

  const handleBackClick = () => {
    setShowJoinConference(false);
  };

  const {loggedIn} = useAuth()


  if (loggedIn){
    return <Redirect to='/my/dashboard' />
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BSNL MVCS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size='3'>
              <IonImg className="logo-img" src="https://1.bp.blogspot.com/-WLUaHeseza4/XQDZ8i2vCYI/AAAAAAAAAvo/lTLe0DnI9p0PkqMYxEY1L6ztO3if39IJwCLcBGAs/s1600/bsnl-logo.jpeg" alt="LogoBSNL" />
            </IonCol>
            <IonCol size='9'>
              <IonText className="multi-text">MULTIMEDIA VIDEO CONFERENCE SERVICE</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12'>
              {!showJoinConference?
              <LoginBox onJoinConferenceClick={handleJoinConferenceClick}/> :
              <JoinConference onBackClick={handleBackClick}/>}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
