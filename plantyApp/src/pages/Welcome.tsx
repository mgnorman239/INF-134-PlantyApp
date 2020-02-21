import React ,{ Component }from 'react';
import {IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import "./Welcome.css"

const slideOpts = {
    initialSlide: 1,
    speed: 400
  };
class Welcome extends Component{
    render(){
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
        <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
        <IonItem class="planty">
          <img src={require("./images/Planty.jpg")} alt="Planty the Self-Care Plant"></img>
        </IonItem>
        </IonSlide>
        <IonSlide>
        <IonItem class="welcome-image">
          <img src={require("./images/sunflower.jpg")} alt="Planty the Self-Care Plant"></img>
        </IonItem>
        </IonSlide>
        <IonSlide>
        <IonItem class="welcome-image">
          <img src={require("./images/flowers.jpg")} alt="Planty the Self-Care Plant"></img>
        </IonItem>
        </IonSlide>
        </IonSlides>
        
        <IonButton class = "Actuvity-button" color="#8388C8" href = "/PickActivity">Activity</IonButton>
        
        </IonContent>
        </IonPage>

    )
    }
    
}

export default Welcome;
