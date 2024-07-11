import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import PhoneAuthScreen from './PhoneAuthScreen';

const App1 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmResult, setConfirmResult] = useState<any>(null);

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      console.log("signInWithPhoneNumber")
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log("confirmation"+confirmation)
      setConfirmResult(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirmResult.confirm(verificationCode);
      console.log('Phone number verified!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PhoneAuthScreen />
    // <View>
    //   {!confirmResult ? (
    //     <>
    //       <TextInput
    //         placeholder="Phone Number"
    //         onChangeText={setPhoneNumber}
    //         value={phoneNumber}
    //       />
    //       <Button title="Send OT1P" onPress={() => signInWithPhoneNumber(phoneNumber)} />
    //     </>
    //   ) : (
    //     <>
    //       <TextInput
    //         placeholder="Verification Code"
    //         onChangeText={setVerificationCode}
    //         value={verificationCode}
    //       />
    //       <Button title="Confirm Code" onPress={confirmCode} />
    //     </>
    //   )}
    // </View>
  );
};

export default App1;