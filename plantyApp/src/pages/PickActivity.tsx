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
    slides = document.querySelector('.activityPick')
    grid_nextPage=()=>{
        
    }
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
                <IonRow class="grid_row">
                    <IonCol>
                        <IonButton href="/Activity2">
                            <IonIcon icon={mail} class="input-line-icon" ></IonIcon>
                            </IonButton>
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
                            <IonIcon icon={mail} class="input-line-icon" color="black"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <br></br>
                    <IonRow>
                    
                        <IonButton class="next_page" onClick={this.grid_nextPage}>
                            <IonIcon icon={arrowDownOutline}></IonIcon>
                            next page
                        </IonButton>
                    </IonRow>
            </IonGrid>
            </IonSlide>
            <IonSlide>
            
            <IonGrid class="grid_menu">
                {/* grid be wider have to use br element */}
                {/* size is for the*/}
                <IonRow>
                    
                        <IonButton class="next_page" onClick={this.grid_lastPage}>
                            <IonIcon icon={arrowUpOutline}></IonIcon>
                            lst page
                        </IonButton>
                </IonRow>

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
                            <IonIcon icon={mail} class="input-line-icon" color="black"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <br></br>
                    <br></br>
                    
            </IonGrid>
            </IonSlide>
            </IonSlides>
        </IonContent>
        </IonPage>
        ) 
    }
}
export default PickActivity
