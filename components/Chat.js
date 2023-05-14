import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

const Chat = ({ route, navigation }) => {
  const { username, color } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: username });
  }, []);
   console.log(color)
 return (
   <View style={[styles.container, {backgroundColor: color}]}>
     <Text>Hello {username}!</Text>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default Chat;