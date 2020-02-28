import React ,{ Component }from 'react';
import {IonCard,IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import "./Activity2.css";

class Activity2 extends Component{


    render(){
        return(
            <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Setup Activity</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton icon={arrowBack} defaultHref="/PickActivity"></IonBackButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
            <IonContent>
                <IonLabel>#binding activity name</IonLabel>
                <br></br>
                
                <IonIcon icon={mail} class="activityPicture" size="64px"></IonIcon>
                
            </IonContent>
            </IonPage>
            
        )
    }
}
export default Activity2