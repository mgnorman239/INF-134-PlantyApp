import React ,{ Component }from 'react';
import { IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import "./Welcome.css"
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';

const Welcome: React.FC=()=> {

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
        <IonContent>
                    
                <IonItem class="center-plant">
                    <img src={require("./images/Planty.jpg")} alt="Planty the Self-Care Plant"></img>
                </IonItem>
        <IonButton class = "previous" color= "#8388C8"> Prev</IonButton>
        <IonButton class = "Actuvity-button" color="#8388C8">Activity</IonButton>
        <IonButton class = "next" color= "#8388C8"> next</IonButton>
        </IonContent>
        </IonPage>

    )
    
}

export default Welcome;
