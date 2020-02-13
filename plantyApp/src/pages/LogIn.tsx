import { IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon } from '@ionic/react';
import { mail, lockClosed } from 'ionicons/icons';
import React from 'react';
import './LogIn.css';

const LogIn: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>Log In</IonHeader>

            <IonContent>
                <IonItem class="center-logo">
                    <img src="Planty.jpg"></img>
                </IonItem>
                    <IonItem class="input-line input-line-email">
                <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Email" class="input-line-text"></IonInput>
                </IonItem>
                    <IonItem class="input-line input-line-password">
                <IonIcon icon={lockClosed} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Password" class="input-line-text"></IonInput>
                </IonItem>
                <IonItem class="confirm-button-box">
                    <IonButton class="confirm-button" color="primary">Get Started</IonButton>
                </IonItem>
        
            </IonContent>
        </IonPage>
    )
};

export default LogIn;