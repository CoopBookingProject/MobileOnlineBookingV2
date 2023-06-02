import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useState } from 'react'

const registerscreens = () => {

    const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.viewlogotop}>
        <Image source={require('../image/Login/Logo.png')} style={styles.imagelogotop} />
      </View>
      <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>registerscreens</Text>
      <View style={styles.viewinput}>

        <View style={styles.boxtextinput}>

          {/** Inputname */}
              <Text style={stylestext.textheader}>Name</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />
              {/** Inputlast name */}
              <Text style={stylestext.textheader}>Lastname</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />

              {/** InputEmail */}
              <Text style={stylestext.textheader}>Email</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />
              {/** Inputpassword */}
              <Text style={stylestext.textheader}>Password</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />
              {/** InputPhonenumber */}
              <Text style={stylestext.textheader}>Phonenumber</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />
              {/** InputUsername */}
              <Text style={stylestext.textheader}>Username</Text>
              <TextInput
                placeholder='name'
                style={stylestext.textinput}
              />
          <View style={styles.typegender}>
              <Text style={stylestext.gender}>Gender</Text>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                {['male','female','other'].map(genderselect => 
                <View key={genderselect} style={styles.viewgenderseletor}>
                  <Text style={styles.genderselect}>{genderselect}</Text>
                    <TouchableOpacity style={styles.outter}
                      onPress={() => setGender(genderselect)}
                    >
                       { gender === genderselect && <View style={styles.inner}/>}
                    </TouchableOpacity>
                </View>
                  )}
                 
              </View>
                  
                
          </View>
          <View style={styles.buttomregister}>
            <TouchableOpacity style={styles.bottomregistersave}>
                  <Text style={stylestext.textregister}>Register</Text>
            </TouchableOpacity>
          </View>
          


        </View>



      </View>

    </View>
  )
}

export default registerscreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  viewlogotop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    marginTop: 40,
  },
  imagelogotop: {
    height: '80%',
    width: '70%',
    marginTop: 10
  },
  viewinput: {
    alignSelf: 'center',
    padding: 10,
    width: '90%',
    height: '80%',
  },
  boxtextinput: {
    padding: 10,
    width: '100%',
    height: '20%',
  },
  inner:{
    width:15,
    height:15,
    backgroundColor:'black',
    borderRadius:10,
  },
  outter:{
    justifyContent:'center',
    alignItems:'center',
    width:25,
    height:25,
    borderWidth:1,
    borderRadius:15,
    marginHorizontal:5,
  },
  viewgenderseletor:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  genderselect:{
    alignItems:'center',
    fontSize:14,
    fontWeight:'400',
    marginHorizontal:5
  },
  buttomregister:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  bottomregistersave:{
    width:'50%',
    height:'60%',
    backgroundColor:'#617A55',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  }
  
})
const stylestext = StyleSheet.create({
  textheader: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  textinput: {
    marginBottom: 10,
    borderRadius: 40,
    width: '100%',
    height: '40%',
    padding: 10,
    backgroundColor: '#C2D9BD',
  },
  typegender: {
    backgroundColor: 'gray',
    height: '30%',
    width: '100%'
  },
  textregister:{
    fontSize:18,
    fontWeight:'600',
    color:'#fff'
  }
  
})