/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { MyWebComponent } from './WebView';
import { Button, TextInput, ToastAndroid, View } from 'react-native';
// import RNUpiPayment from 'react-native-upi-payment';
import uuid from 'react-native-uuid';
import { NativeModules } from 'react-native';
import App1 from './App1';


function App(): React.JSX.Element {
  const [payableAmount,setPayableAmount] = useState('1');
  const config =  {
    upiId: 'mnjmuthuraj-1@okicici',
    name: "Manoj",
    note: 'Test payment',
    amount: '1',
  }
  const onSuccess = (success:any) => {
    ToastAndroid.show('payment success!', ToastAndroid.SHORT);
    console.log({success})
    return success;
  }
  const onFailure = (error: any) => {
    ToastAndroid.show('payment failed!', ToastAndroid.SHORT);
    console.log({error})
    return error;
  }
  const payUPI = (vpa: string,payeeName: string,transactionRef: string)=>{
    NativeModules.UpiPaymentModule.initiatePayment(config,onSuccess,onFailure);

    // OneUpi.initiate(
    //   config,
    //   onSuccess,
    //   onFailure,
    // )
    // RNUpiPayment.initializePayment(
    //   {
    //     vpa, // or can be john@ybl or mobileNo@upi
    //     payeeName,
    //     amount: payableAmount,
    //     transactionRef
    //   },
    //   ()=>{
    //     ToastAndroid.show('payment success!', ToastAndroid.SHORT);
    //   },
    //   (failed: any)=>{
    //     console.log(failed)
    //     ToastAndroid.show('payment failed!', ToastAndroid.SHORT);
    //   }
    // );
  }

  const payUPI1 = ()=>{
    const uuid4 = uuid.v4();
    payUPI('mnjmuthuraj-1@okicici','Manoj M',uuid4 as string);
  }
  const payUPI2 = ()=>{
    const uuid4 = uuid.v4();
    config.upiId = 'shree.aswin@okicici';
    config.name = 'Shreedhar';

    payUPI('shree.aswin@okicici','Shreedhar',uuid4 as string);
  }
  const payUPI3 = ()=>{
    const uuid4 = uuid.v4();
    payUPI('dhanashreevenkatesan24-1@okaxis','Dhanashree',uuid4 as string);
  }
  // const payUPI4 = ()=>{
  //   const uuid4 = uuid.v4();
  //   payUPI('dhanashreevenkatesan24-1@okaxis','Dhanashree',uuid4 as string);
  // }

  return (
    <View style={{flex:1}}>
      <MyWebComponent />
      {/* <View>
        <TextInput onChangeText={setPayableAmount} value={payableAmount} keyboardType='decimal-pad' />
        <Button title='Pay to Manoj' onPress={payUPI1} />
        <Button title='Pay to Sridhar' onPress={payUPI2} />
        <Button title='Pay to Dhanashree' onPress={payUPI3} />
      </View> */}
      <App1 />
      <View>
        <Button
            title="Pay now"
            onPress={payUPI2}
          /> 
      </View>
    </View>
    )
}


export default App;
