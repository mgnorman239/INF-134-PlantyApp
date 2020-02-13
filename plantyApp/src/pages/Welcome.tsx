import React from 'react';
import { IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText } from '@ionic/react';
import { mail, lockClosed, arrowBack} from 'ionicons/icons';
import "./Welcome.css"

const Welcome: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton icon={arrowBack} defaultHref="/login"></IonBackButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        </IonPage>
    )
}
export default Welcome;