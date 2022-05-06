import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path='/login'>
            <LoginPage onLogin={() => setLoggedIn(true)} loggedIn={loggedIn} />
          </Route>
          <Route path='/my'>
            <AppTabs loggedIn={loggedIn} />
          </Route>
          <Redirect exact path='/' to='/my/entries' />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
