import { View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/*<HomeScreen/>*/}
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FAFAFD',
  }
})
