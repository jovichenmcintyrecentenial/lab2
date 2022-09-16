import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Switch  } from 'react-native';
import React, { useState } from "react";

function RedText(props){
  return (
    <Text style={styles.textView}>{props.name}</Text>
  );
}

export default function App() {
  const placeholderText = 'Type somethine here';
  const [value, onChangeText] = React.useState('Type somethine here');  
  const [switchState,setSwitchState] = React.useState(false);
  return (
    
    <View style={[styles.container,switchState?styles.darkBackground:styles.lightBackground]}>

      <TextInput style={styles.edit}
        onChangeText={text => onChangeText(text)}
        clearTextOnFocus="true"
        value={value}
      />
     
     <RedText name={placeholderText==value?'':value}></RedText>
    <Button 
           title="Clear" 
           onPress={() => onChangeText('')}></Button>
      <Switch onValueChange={()=> setSwitchState(switchState => !switchState)}
       value={switchState}
       >

      </Switch>
      <RedText name={switchState?'Dark':'Light'}></RedText>

    </View>
  );
}

const styles = StyleSheet.create({
  darkBackground:{
    backgroundColor: '#000',
 },
 lightBackground:{
  backgroundColor: '#fff',
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit:{
    width:"90%",
    height:48,
    borderRadius:10,
    borderWidth:2,
    borderColor:"grey",
    fontSize:20,
    tintColor:"grey",
    color:"grey"
    
  },
  
  button:{
    width: 20,
    height: 20,
  
  },
  textView:{
    marginTop:10,
    marginBottom:10,
    color: "grey",
    fontSize:20
  }
});
