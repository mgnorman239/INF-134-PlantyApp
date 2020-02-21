import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Plant from './pages/Plant';
import Tutorial1 from './pages/Tutorial1';
import Tutorial2 from './pages/Tutorial2';
import Welcome from './pages/Welcome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
import PickActivity from './pages/PickActivity';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/login" component={LogIn} exact={true} />
        <Route path="/plant" component={Plant} exact={true} />
        <Route path="/signup" component={SignUp} exact={true} />
        <Route path="/tutorial1" component={Tutorial1} exact={true} />
        <Route path="/tutorial2" component={Tutorial2} exact={true} />
        <Route path = '/welcome' component={Welcome} exact={true}/>
        <Route path = '/PickActivity' component ={PickActivity} exact = {true}>   
        
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
