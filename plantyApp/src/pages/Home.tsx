import { IonContent, IonHeader, IonPage, IonTitle, IonItem, IonButton, IonText, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle>Planty App</IonTitle>
      </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonText class="home-page-text">Welcome to Planty!</IonText>
        <IonText class="welcome-text">Welcome</IonText>
        
        <IonItem class="welcome-image">
          <img src={require("./images/Planty.jpg")} alt="Planty the Self-Care Plant"></img>
        </IonItem>
 
        <IonButton class="log-in-button button-text" href="/login">Log In</IonButton>
          <IonButton class="sign-up-button button-text" href="/signup">Sign Up</IonButton>
          <IonText class="forgot-info-text">Forgot Info</IonText>
        
      </IonContent>

    </IonPage>
  );
};

export default Home;
