import React ,{ Component }from 'react';
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
        <IonContent>
        <IonItem class="center-plant">
                    <img src={require("./images/Planty.jpg")} alt="Planty the Self-Care Plant"></img>
                </IonItem>
        </IonContent>
        </IonPage>
    )
}
export default Welcome;