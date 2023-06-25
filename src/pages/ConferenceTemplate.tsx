import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ConferenceTemplate: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Conference Templates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Search for Conf Templates 
      </div>
      </IonContent>
    </IonPage>
  );
};

export default ConferenceTemplate;
