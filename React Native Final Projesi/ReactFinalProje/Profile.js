/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import FB from './Firebase';
export default class Profile extends Component{
     state = {
      email: '',
      pass: ''
     }

     //Firebase authentication sağlanıyor ve oluşturulan email adresi ve şifresi ile giriş sağlanıyor.
      kayitol = async() => {
      // eslint-disable-next-line no-undef
      FB.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass);
       console.warn('Kullanıcı Oluşturuldu');
      }

      Girisyap = () => {
      FB.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
      console.warn('Kullanıcı giriş yaptı');
   }

      render(){
         //View class içerisinde text, buton ve butona basılınca çalıştırılacak metodlar belirleniyor.
     return (
       <View style={{flex:10, padding:10, backgroundColor:'skyblue'}}>
        <Text style={{marginLeft:75,fontSize:15}}>Veri Tabanı Kayıt ve Giriş Bölümü</Text>
        <TextInput
           placeholder="Email Adresi"
           underlineColorAndroid="transparent"
           onChangeText={email => this.setState({email:email})}
           value= {this.state.email}
           keyboardType="email-address"
           placeholderTextColor="gray"
         />
        <TextInput
           placeholder="Şifre"
           underlineColorAndroid="transparent"
           onChangeText={pass => this.setState({pass:pass})}
           value= {this.state.pass}
           secureTextEntry
           placeholderTextColor="gray"
         />
          <Button title= "Giriş Yap"
          style={{backgroundColor:'red', flex:5, padding:5}} onPress={()=> this.Girisyap()}/>

          <Button title= "Kayıt Ol"
          style={{backgroundColor:'green',flex:5, padding:5}} onPress={()=> this.kayitol()}/>

      </View>
     );
    }
}
