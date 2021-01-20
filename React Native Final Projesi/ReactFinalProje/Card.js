/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity, FlatList} from 'react-native';
import FB from './Firebase';
import AsyncStorage from '@react-native-community/async-storage';
export default class Card extends Component{

    constructor(props){
    super(props);
    this.state = {okulist: []};
    }

    state = {
      text: '',
    }
     veriyaz = () => {
     //database bağlantısı oluşturuluyor ve ref ile gönderilecek verilerin referansı veritabanıyla sağlanıyor.
      FB.database().ref('PersonelDB').push(this.state.text);
    }

    componentDidMount() {
      FB.database()
      .ref('PersonelDB')
      .on('value', snapshot => {
        let okulist = [];
        snapshot.forEach(snap => {
          okulist.push(snap.val());
        });
       this.setState({okulist: okulist});
      });
    }

    verisil = () => {
      FB.database().ref('PersonelDB').remove();

    }

    veriguncelle = () => {
      FB.database().ref('PersonelDB').update(this.state.okulist);
    }

    render(){
     return (
       // eslint-disable-next-line react-native/no-inline-styles
       <View style={{flex:10, padding:10 }}>

        <TextInput style = {{flex:1 , padding:1, backgroundColor:'orange'}}
           placeholder="Verilerinizi buraya yazınız..."
           underlineColorAndroid="transparent"
           onChangeText={text => this.setState({ text:text })}
           value= {this.state.text}
           placeholderTextColor="gray"
           onPress={() => this.veriyaz()}
         />
         <Button style={{flex:1, padding:3}}
         title="Verileri sil" onPress={() =>this.verisil()}/>

         <Button style={{flex:1, padding:3}}
         title="Veri güncelle" onPress={() =>this.veriguncelle()}/>

         <Button style={{flex:1, padding:3}}
         title="Veri Gönder" onPress={() =>this.veriyaz()}/>

         <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          keyExtractor={(_,index)=>index.toString()}
          style={{marginTop:5, padding:10, flex:10, backgroundColor:'skyblue'}}
          data = {this.state.okulist}
          renderItem={({item}) => <Text style={{fontSize:20}}>{item}</Text>}
          ItemSeparatorComponent={()=> <View style={{marginVertical:5, borderWidth:0.5}}/>}
        />
       </View>

     );



    }


}
