import { camera, trash, close } from 'ionicons/icons';
import React ,{ Component }from 'react';
import {IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup, IonGrid, IonRow, IonCol } from '@ionic/react';
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
            <IonGrid class="grid_menu">
                {/* grid be wider have to use br element */}
                {/* size is for the*/}
                <IonRow class="grid_row">
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon" ></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon" ></IonIcon>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <br></br>
                    <IonRow class="grid_row">
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <br></br>
                    <IonRow>
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <br></br>
                    <IonRow >
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                    </IonRow>
                    
                    
            </IonGrid>
        </IonContent>
        </IonPage>
        ) 
    }
}
export default PickActivity
