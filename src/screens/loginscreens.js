import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'




const loginscreens = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <View style={styles.viewlpgptop}>
        <Image source={require('../image/Login/Logo.png')} style={styles.imagelogotop} />
      </View>
      <View style={styles.viewinput}>
        <Text style={textstyle.textlogin}>Login</Text>
        <View style={styles.inputbox}>
          <Text style={textstyle.textname}>username</Text>
          <TextInput style={styles.textinputbox} />
          <Text style={textstyle.textname}>password</Text>
          <TextInput style={styles.textinputbox} />
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', padding: 5 }}>
            <TouchableOpacity>
              <Text >forgotpassword</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbox}>
              <View style={styles.button}>
                 <TouchableOpacity style={styles.buttonview} onPress={() => navigation.navigate('mainmenuscreen')}>
                  <Text style={textstyle.textloginbutton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonviewregister} onPress={() => navigation.navigate('registerscreens')}>
                  <Text style={textstyle.textregisterbutton}>Register</Text>
                </TouchableOpacity>
              </View>

               <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '600' }}>ro</Text>

                <View style={styles.viewregisicon}>
                  <TouchableOpacity onPress={() => navigation.navigate('mainmenuscreen')} style={{ height: '90%', width: '80%', }}>
                    <Image source={require('../image/Login/email.png')} style={{ height: '90%', width: '50%' }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('mainmenuscreen')} style={{ height: '90%', width: '80%' }}>
                    <Image source={require('../image/Login/facebook.png')} style={{ height: '90%', width: '50%' }} />
                  </TouchableOpacity>
                </View>

          </View>
        </View>
      </View>
    </View>




  )
}

export default loginscreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  viewlpgptop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    marginTop: 40,
  },
  imagelogotop: {
    height: '80%',
    width: '70%',
  },
  viewinput: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  inputbox: {
    height: '80%',
    width: '100%',
    padding: 10,
  },
  textinputbox: {
    width: '100%',
    height: 60,
    backgroundColor: '#C2D9BD',
    borderRadius: 60,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '35%',
    padding: 10,
  },
  buttonview: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#617A55',
    height: '70%',
    width: '80%',
    borderRadius: 40
  },
  buttonviewregister: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 15
  },
  viewregisicon: {
    flexDirection: 'row',
    right:10,
    marginTop: 10,
    width: '30%',
    height: '25%',
  },
  buttonbox:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    height:'40%',
    width:'100%',
  }


})

const textstyle = StyleSheet.create({
  textlogin: {
    fontSize: 18,
    fontWeight: '600',

  },
  textname: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10
  },
  textloginbutton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  textregisterbutton: {
    fontSize: 18,
    fontWeight: '600',
  }
})