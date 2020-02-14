import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonInput, IonButton, IonText } from '@ionic/react';
import { mail, lockClosed, arrowBack, person } from 'ionicons/icons';
import './SignUp.css'

const SignUp: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonText class="welcome-text">Join for Free!</IonText>
                <IonItem class="center-logo">
                    <img src="Planty.jpg" alt="Planty the Self-Care Plant"></img>
                </IonItem>
                <IonItem class="input-line input-line-email">
                    <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Email" class="input-line-text"></IonInput>
                </IonItem>
                <IonItem class="input-line input-line-password">
                    <IonIcon icon={lockClosed} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Password" class="input-line-text"></IonInput>
                </IonItem>
                <IonItem class="input-line input-line-display-name">
                    <IonIcon icon={person} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Display Name" class="input-line-text"></IonInput>
                </IonItem>
                <IonButton class="confirm-button" color="primary" href='/tutorial1'>Get Started</IonButton>
        
            </IonContent>
        </IonPage>
    )
};

export default SignUp