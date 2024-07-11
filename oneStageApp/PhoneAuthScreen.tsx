import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("+917200650107");
  const [verificationId, setVerificationId] = useState<any>('');
  const [code, setCode] = useState<any>('');
  const [lastRequestTime, setLastRequestTime] = useState(0);


  // const sendVerification = async () => {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     setVerificationId(confirmation.verificationId);
  //   } catch (error) {
  //     console.error('Verification error:', error);
  //   }
  // };

  // const confirmCode = async () => {
  //   try {
  //     const credential = auth.PhoneAuthProvider.credential(verificationId, code);
  //     await auth().signInWithCredential(credential);
  //     console.log('Phone authentication successful');
  //   } catch (error) {
  //     console.error('Code confirmation error:', error);
  //   }
  // };
  const sendVerification = async () => {
    const currentTime = Date.now();
    if (currentTime - lastRequestTime < 60000) { // 60 seconds cooldown
      Alert.alert('Please wait', 'You can request a new code in 1 minute.');
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmation.verificationId);
      setLastRequestTime(currentTime);
    } catch (error:any) {
      if (error.code === 'auth/too-many-requests') {
        console.error('Too many requests. Please try again later.');
        Alert.alert('Too many requests', 'Please try again later.');
      } else {
        console.error('Verification error:', error);
      }
    }
  };

  const confirmCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, code);
      await auth().signInWithCredential(credential);
      console.log('Phone authentication successful');
    } catch (error) {
      console.error('Code confirmation error:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Button title="Send Verification" onPress={sendVerification} />
      <TextInput
        placeholder="Verification Code"
        onChangeText={setCode}
        value={code}
      />
      <Button title="Confirm Code" onPress={confirmCode} />
    </View>
  );
};

export default PhoneAuthScreen;
