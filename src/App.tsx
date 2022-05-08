import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';
import { auth } from './firebase';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [authState, setAuthState] = useState({ loading: true, loggedIn: false });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({ loading: false, loggedIn: Boolean(user) });
    });
  }, []);

  if (authState.loading) {
    return <IonLoading isOpen />;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
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
