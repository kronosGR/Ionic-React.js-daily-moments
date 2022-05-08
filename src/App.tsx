import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import { auth } from './firebase';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoggedIn(Boolean(user));
    });
  }, []);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route path='/my'>
              <AppTabs />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
