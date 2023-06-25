import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OngoandUpcomMeets from '../components/OngoandUpcomMeets';
import StartConfBtn from '../components/StartConfBtn';

const Dashboard: React.FC = () => {

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <OngoandUpcomMeets />
        <OngoandUpcomMeets />
        <OngoandUpcomMeets />
        <OngoandUpcomMeets />
        <OngoandUpcomMeets />
        <StartConfBtn />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;




