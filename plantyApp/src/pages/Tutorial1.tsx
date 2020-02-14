import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonItem } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

const Tutorial1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent color="secondary">
                <IonText class="welcome-text">Welcome to Planty, Peter the Anteater!</IonText>
                <IonButton>Get Started</IonButton>
                <IonText>Skip Tutorial</IonText>
            </IonContent>
        </IonPage>
    )
}

export default Tutorial1