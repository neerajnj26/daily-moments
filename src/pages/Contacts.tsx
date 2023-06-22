import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Contacts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
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
        Search for Contacts
    </div>
      </IonContent>
    </IonPage>
  );
};

export default Contacts;
