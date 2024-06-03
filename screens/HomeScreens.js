import { View, Text, Image, Dimensions, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme/index';
import SearchBar from 'react-native-dynamic-search-bar';

export default function HomeScreens() {
  return (
    <View>
      <StatusBar hidden={false} />
      <ImageBackground blurRadius={70} source={require('../assets/images/bg.png')} style={{width:'100%', height:'100%'}} resizeMode='cover'>
      <SafeAreaView>
        <SearchBar style={{marginTop:40,opacity:0.40, filter:'alpha(opacity=40)'}}
          placeholder="Search Here"
          onChangeText={(text) => console.log(text)}
          />
    {/* forecast section */}
    <View style={{borderRadius:15}} />
    {/* location */}
    <View style={{flexDirection:'row', paddingTop:50, paddingLeft:65}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>London, </Text>
      <Text style={{color:'#D4AF37', fontWeight:'bold', fontSize:20}}>United Kingdom</Text>
    </View>
    
    
    {/* weather icon */}
    <View style={{paddingTop:50}}>
      <Image source={require('../assets/images/partlycloudy.png')} resizeMode='center' style={{width:Dimensions.get('screen').width*1.0, height:Dimensions.get('screen').height*0.2}}/>
    </View>
    {/*temperature */}
    <View style={{padding:20}}>
      <Text style={{fontSize:50, fontWeight:'bold', color:'white', textAlign:'center'}}>19&#176;</Text>
      <Text style={{fontSize:15, fontWeight:'bold', color:'white', textAlign:'center'}}>Partly Cloudy</Text>
    </View>
    <View style={{flexDirection:'row', alignSelf:'center'}}>
    <View style={{flexDirection:'row', width:'30%'}}>
      <Image source={require('../assets/icons/wind.png')} style={{width:Dimensions.get('screen').width*0.1, height:Dimensions.get('screen').height*0.045, padding:20}}/>
      <Text style={{color:'white', padding:10}}>17km</Text>
    </View>
    <View style={{flexDirection:'row', width:'30%'}}>
      <Image source={require('../assets/icons/drop.png')} style={{width:Dimensions.get('screen').width*0.1, height:Dimensions.get('screen').height*0.045, padding:20}}/>
      <Text style={{color:'white', padding:10}}>23%</Text>
    </View>
    <View style={{flexDirection:'row', width:'30%'}}>
      <Image source={require('../assets/icons/sun.png')} style={{width:Dimensions.get('screen').width*0.1, height:Dimensions.get('screen').height*0.045, padding:20}}/>
      <Text style={{color:'white', padding:10}}>1:42pm</Text>
    </View>
    
    </View>

    {/*forecast */}
    <View>
      <View>
        <Text style={{color:'white', fontWeight:'bold', padding:15}}>Daily Forecast</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}}
      showsHorizontalScrollIndicator={false}>
        
        
        <View style={{backgroundColor:'white',margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/heavyrain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain' />
          <Text style={{color:'black',opacity:1, textAlign:'center', fontWeight:'bold'}}>Monday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>19&#176;</Text>
        </View>
        
        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/moderaterain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain'/>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Tuesday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>24&#176;</Text>
        </View>

        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/mist.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain' />
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Wednesday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>15&#176;</Text>
        </View>
        
        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/heavyrain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain'/>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Thursday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>19&#176;</Text>
        </View>

        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/heavyrain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain' />
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Friday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>19&#176;</Text>
        </View>
        
        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/heavyrain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain'/>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Saturday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>19&#176;</Text>
        </View>

        <View style={{backgroundColor:'white', margin:5, borderRadius:15,opacity:0.40, filter:'alpha(opacity=40)'}}>
          <Image source={require('../assets/images/heavyrain.png')} style={{width:Dimensions.get('screen').width*0.25, height:Dimensions.get('screen').height*0.07}} resizeMode='contain'/>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>Sunday</Text>
          <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>19&#176;</Text>
        </View>

      </ScrollView>
    </View>
  </SafeAreaView>
</ImageBackground> 
    
    
    </View>
  

  )
}