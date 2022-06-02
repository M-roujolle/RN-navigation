import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button } from 'react-native'


const HomeScreen = ({navigation}) => (
  <Button
    title="Voir l'écran de test"
    onPress={()=>
      navigation.navigate('Test')
    }
    />

)

const TestScreen = () => (
  <View style={{flex:1}}>
    <Text>Ceci est un test</Text>
    <Button 
      title="Retour à la HomeScreen"
      onPress = {()=>
        navigation.navigate('Home')
      }
    />
  </View>
)


const App = () => (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name='Home'/>
            <Stack.Screen component={TestScreen} name='Test'/>
        </Stack.Navigator>
    </NavigationContainer>

)

export default App