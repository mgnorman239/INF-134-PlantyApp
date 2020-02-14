import React from 'react';
import './Tutorial2.css';
import { IonPage, IonHeader, IonContent, IonText, IonProgressBar, IonIcon } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';

const Tutorial2: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent color="secondary">
                <IonText class="tutorial-text">Choose your Plant Pal</IonText>
                <IonProgressBar class="tutorial-progress-bar" type="determinate" value={.33}></IonProgressBar>
                <IonIcon icon={arrowBack} class="back-arrow"></IonIcon>
                <IonIcon icon={arrowForward} class="forward-arrow"></IonIcon>
            </IonContent>
        </IonPage>
    )
}
export default Tutorial2;