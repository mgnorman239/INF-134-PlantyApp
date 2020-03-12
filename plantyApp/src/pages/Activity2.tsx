import React ,{Component, useState }from 'react';
import {IonDatetime,IonCard,IonSlides, IonSlide ,IonListHeader,IonLabel,IonRadio, IonContent, IonHeader, IonPage, IonInput, IonItem, IonButton, IonIcon, IonToolbar, IonTitle, IonButtons, IonBackButton, IonText, IonSelect, IonRadioGroup } from '@ionic/react';
import { mail, lockClosed, arrowBack, construct} from 'ionicons/icons';
import "./Activity2.css";

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = [
  's\u00f8n',
  'man',
  'tir',
  'ons',
  'tor',
  'fre',
  'l\u00f8r'
];


export const Activity2: React.FC = () => {
const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');

    
    
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
                <IonLabel class="actText"> Medication</IonLabel>
                <br></br>
                <IonLabel class="logo">
                <img id="logo1" src={require("./images/spray.svg")} ></img>
                </IonLabel>
                <IonItem  class="timer">
                <IonDatetime displayFormat="HH:mm:ss" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                </IonItem>

            <IonButton class="startButton">
                Click to Start
            </IonButton>
            </IonContent>
            </IonPage>
            
        )
    }

export default Activity2