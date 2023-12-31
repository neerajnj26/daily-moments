import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { entries } from '../data';

interface RouteParams {
  id: string
}

const EntryPage: React.FC = () => {
const {id} = useParams<RouteParams>()
const entry = entries.find((entry) => entry.id === id)
if(!entry){
  throw new Error(`No such entry: ${id}`)
}
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton style={{color:'#ffffff'}} />
          </IonButtons>
          <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry.description}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
