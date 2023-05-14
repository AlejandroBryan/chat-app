import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import { useState } from "react";

const StartScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [color, setColor] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Background-Image.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.textTitle}>Chat-Demo</Text>
        <View style={styles.Section}>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Type your username here"
          />
          <Text style={{ alignSelf: "center", fontSize: 25 }}>
            Chose a color
          </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.button, styles.tomato]}
              onPress={() => setColor('#ff6347')}
            ></TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.beige]}
              onPress={() => setColor('#faf0e6')}
            ></TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.blue]}
              onPress={() => setColor('#2596be')}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.violet]}
              onPress={() => setColor('#8876ea')}
            ></TouchableOpacity>
          </View>

          <Button
            title="Start Chatting"
            onPress={() => navigation.navigate("Chat", { username: username, color: color})}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

  },
  textTitle: {
    fontWeight: 600,
    fontSize: 45,
    color:'#fff',
    marginBottom: 32,
    textAlign: "center",
  },
  Section: {
    flex: .4,
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "88%",
    height: "45%",
    backgroundColor: "white",
    padding: (40, 15),
    borderRadius: 50 / 4,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: (0, 1),
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    margin:(15, 15)
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  startButton: {
    fontSize: 32,
    width: "80%",
    height: 35,
    width: 35,
    borderRadius: 50 / 2,
    padding: 32,
  },
  tomato: {
    backgroundColor: "#ff6347",
  },
  beige: {
    backgroundColor: "#e28743",
  },
  blue: {
    backgroundColor: "#2596be",
  },
  violet: {
    backgroundColor: "#8876ea",
  },
});
export default StartScreen;
