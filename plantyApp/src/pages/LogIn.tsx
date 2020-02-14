import { IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText } from '@ionic/react';
import { mail, lockClosed, arrowBack} from 'ionicons/icons';
import React from 'react';
import './LogIn.css';


const LogIn: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Log In</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonText class="welcome-text">Welcome Back!</IonText>
                <IonItem class="center-logo">
                    <img src={require("./images/Planty.jpg")} alt="Planty the Self-Care Plant"></img>
                </IonItem>
                    <IonItem class="input-line input-line-email">
                <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Email" class="input-line-text"></IonInput>
                </IonItem>
                <IonItem class="input-line input-line-password">
                    <IonIcon icon={lockClosed} class="input-line-icon"></IonIcon>
                    <IonInput type="text" placeholder="Password" class="input-line-text"></IonInput>
                </IonItem>
                <IonButton class="confirm-button" color="primary" href = "/welcome">Log In</IonButton>
        
            </IonContent>
        </IonPage>
    )
};

export default LogIn;