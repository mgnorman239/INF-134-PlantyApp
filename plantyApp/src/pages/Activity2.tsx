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
const [selectedDate, setSelectedDate] = useState<string>('2020-03-12T00:00:00.000');

    
    
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
                <IonLabel class="timer">
                    hours and minutes
                <IonDatetime class="time" displayFormat="HH:mm" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                </IonLabel>

            <IonButton class="startButton">
                Click to Start
            </IonButton>
            </IonContent>
            </IonPage>
            
        )
    }

export default Activity2