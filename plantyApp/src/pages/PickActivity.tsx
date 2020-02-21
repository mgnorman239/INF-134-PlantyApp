import { camera, trash, close } from 'ionicons/icons';
import React ,{ Component }from 'react';
import {IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import { render } from '@testing-library/react';
// import "./Welcome.css"



class  PickActivity extends React.Component{
    render(){
        return(<IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>PickActivity</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton icon={arrowBack} defaultHref="/welcome"></IonBackButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>

        </IonContent>
        </IonPage>
        ) 
    }
}
export default PickActivity
