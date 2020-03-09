import { IonContent, IonHeader, IonPage, IonTitle, IonItem, IonButton, IonText, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar class="toolbar">
          <IonTitle>Planty App</IonTitle>
      </IonToolbar>
      </IonHeader>

      <IonContent class="home-content">
      
        <IonItem class="item">
          <img id="pic" src={require("./images/Planty.jpg")} alt=""></img>
          <IonButton color="#8388C8"  class="log-in-button" href="/login">Log In</IonButton>
          <IonButton color="#8388C8" class="sign-up-button" href="/signup">Sign Up</IonButton>
          <IonText class="forgot-info-text">Forgot Info</IonText>
        </IonItem>
        
 
          
        
      </IonContent>

    </IonPage>
  );
};

export default Home;
