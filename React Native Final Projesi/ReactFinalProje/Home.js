/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View, Text,FlatList,TouchableNativeFeedback,
Alert} from 'react-native';

import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';
import Profile from './Profile';
import Card from './Card';



class Home extends Component
{
  //Kurucu metod ile boş bir array oluşturuluyor.Sonrasında ApiCall ile internete erişim sağlanıyor.
//await ile verilerin alınmasını bekleyip alındıktan sonra alınan değeri json dosyasına dönüştürüldükten
// sonra array ile eşlitleniyor.
  constructor() {
    super();
    this.state = {
      data: [],
    };}
    componentDidMount() {
    this.ApiCall();
   }
   async ApiCall() {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let respJson = await resp.json();
    this.setState({data: respJson});
   }

    render()
     //Flatlist ile jsonplaceholder sitesinden alınan verilerin flatlist içerisinde gösterilmesi sağlanıyor.
     //gelen verileri Alert içerisinde ad,soyad,mail,internet adresi,numaralarının listelenmesi sağlanıyor.
    {
     return (
       <View style={{flex:1, padding:10}}>
        <Text style={{fontSize:15, margin:5,backgroundColor:'yellow'}}>Bilal Mercan Kullanıcı İşlemleri Uygulaması</Text>
        <Text style={{fontSize: 15, margin:5,backgroundColor:'yellow'}}>Kullanıcı Bilgileri</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() => {
                Alert.alert(
                  'Kullanıcı Bilgileri',
                  item.name +
                    '\n' +
                    item.username +
                    '\n' +
                    item.email +
                    '\n' +
                    item.phone +
                    '\n' +
                    item.website +
                    '\n',
                );
              }}
              key={item.id}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex:3,
                  fontSize: 14,
                  backgroundColor: 'green',
                  margin: 20,
                  color: 'white',
                  padding: 20,
                }}>
                {item.name}
              </Text>
            </TouchableNativeFeedback>
          )}
       />
       </View>
   );}}

   //react navigation tab navigation npm ile kurduktan sonra tanımlanıyor.  
   const TabNavigator = createMaterialBottomTabNavigator(
    {
     Home :{screen:Home,
    navigationOptions:{
        tabBarLabel:'Kullanıcılar',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#67baf6'},
        tabBarIcon:()=>(
                <View>
               <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
         </View>)}},



    Profile :{screen:Profile,
        navigationOptions:{
            tabBarLabel:'Kayıt ve Giriş Ekranı',
            activeColor:'#ff0000',
            inactiveColor:'#000000',
            barStyle:{backgroundColor:'#67baf6'},
            tabBarIcon:()=>(
                    <View>
                   <Icon name={'person'} size={25} style={{color:'#ff0000'}}/>
                    </View>)}},





        Card :{screen:Card,
            navigationOptions:{
                tabBarLabel:'Data İşlemleri',
                activeColor:'#ff0000',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                        <View>
                       <Icon name={'add-shopping-cart'} size={25} style={{color:'#ff0000'}}/>
                        </View>)}}});

export default createAppContainer(TabNavigator);
