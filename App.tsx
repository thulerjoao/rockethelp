import { NativeBaseProvider } from "native-base";
import React from 'react';
import SignIn from './src/screens/SingIn';


export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn/>
    </NativeBaseProvider>
  );
}

