import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/login'>
              <LoginPage onLogin={() => setLoggedIn(true)} />
            </Route>
            <Route path='/my'>
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/entries' />
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
