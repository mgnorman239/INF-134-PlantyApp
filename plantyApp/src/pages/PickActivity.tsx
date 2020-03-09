import { camera, trash, close, arrowDownOutline, arrowUpOutline } from 'ionicons/icons';
import React ,{ Component }from 'react';
import {IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup, IonGrid, IonRow, IonCol } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import { render } from '@testing-library/react';
import "./PickActivity.css";

const slideOpts = {
    initialSlide: 0,
    speed: 400,
    direction:'vertical'
  };

class  PickActivity extends React.Component{
    
    
    
    grid_lastPage=()=>{

    }

    
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
        <IonSlides class="activityPick" pager={true} options={slideOpts}>
            <IonSlide>
            <IonGrid class="grid_menu">
                {/* grid be wider have to use br element */}
                {/* size is for the*/}
                <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
              
                    <br></br>
                    <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
               
                    <br></br>
                    <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
                  
                    <br></br>
                    <IonRow >
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon" color="black"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonItem class="slideDown">
                            <IonIcon color="blue" icon={arrowDownOutline}></IonIcon>
                            slide down to see more activities</IonItem>
                        
                    </IonRow>
            </IonGrid>
            </IonSlide>
            <IonSlide>
            
            <IonGrid class="grid_menu">
                {/* grid be wider have to use br element */}
                {/* size is for the*/}
                <IonRow>
                    
                 <IonItem class="slideUp">
                            <IonIcon color="blue" icon={arrowUpOutline}></IonIcon>
                            slide up to see more activities</IonItem>
                </IonRow>

                <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
              
                    <br></br>
                    <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
               
                    <br></br>
                    <IonRow class="F-1">
                    <IonCol class="firstL">
                        <img src={require("./images/spray.svg")}></img>
                        </IonCol>
                        space
                        <IonCol>
                            <img src={require("./images/cough.svg")}></img>
                        </IonCol>
                    </IonRow>
                  
                    <br></br>
                    <IonRow >
                    <IonCol>
                            <IonIcon icon={mail} class="input-line-icon"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={mail} class="input-line-icon" color="black"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow></IonRow>
            </IonGrid>
            </IonSlide>
            </IonSlides>
        </IonContent>
        </IonPage>
        ) 
    }
}
export default PickActivity
