import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const CreateConf: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Conference</IonTitle>
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
        Create Conference
      </div>  
      </IonContent>
    </IonPage>
  );
};

export default CreateConf;


