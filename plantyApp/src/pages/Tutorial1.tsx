import React from 'react';
import { IonPage, IonHeader, IonContent, IonText, IonButton } from '@ionic/react';
import './Tutorial1.css'

const Tutorial1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent color="secondary">
                <IonText class="welcome-text">Welcome to Planty, Peter the Anteater!</IonText>
                <IonButton class="get-started-button" color="secondary" href="/Tutorial2">Get Started</IonButton>
                <IonText class="skip-tutorial-text">Skip Tutorial</IonText>
            </IonContent>
        </IonPage>
    )
}

export default Tutorial1