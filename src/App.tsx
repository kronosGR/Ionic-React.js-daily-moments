import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppTabs from './AppTabs';
import { AuthContext, useAuthInit } from './auth';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }
  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Redirect exact path='/' to='/my/entries' />
          <Switch>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/register'>
              <RegisterPage />
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
