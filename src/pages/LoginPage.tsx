import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useAuth();

  const handleLogin = async () => {
    const credential = await auth.signInWithEmailAndPassword('test@test.com', '123456');
    console.log(credential);
  };

  if (loggedIn) {
    handleLogin();
    return <Redirect to='/my/entries' />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='block' onClick={onLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
