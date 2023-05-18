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
  const [color, setColor] = useState("");

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
              onPress={() => setColor("#FFD998")}
            ></TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.beige]}
              onPress={() => setColor("#faf0e6")}
            ></TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.blue]}
              onPress={() => setColor("#D6E7FC")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.violet]}
              onPress={() => setColor("#E5D6FC")}
            ></TouchableOpacity>
             
          </View>
          <Button
              style={styles.startButton}
              title="Start Chatting"
              onPress={() =>
                navigation.navigate("Chat", {
                  username: username,
                  color: color,
                })
              }
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
  },
  textTitle: {
    fontWeight: 600,
    fontSize: 45,
    color: "#fff",
    textAlign: "center",
    marginBottom: 50,
    marginTop: 90
  },
  Section: {
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "88%",
    height: 280,
    backgroundColor: "white",
    borderRadius: 50 / 4,
    margin: 45,
    padding: 20,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: (0, 1),
    margin: (15, 15),
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
    marginBottom: 25,
    height: 45,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  startButton: {
    fontSize: 32,
    width: "80%",
    width: 35,
    borderRadius: 50 / 2,
    padding: 32,
  },
  tomato: {
    backgroundColor: "#FFD998",
  },
  beige: {
    backgroundColor: "#faf0e6",
  },
  blue: {
    backgroundColor: "#D6E7FC",
  },
  violet: {
    backgroundColor: "#E5D6FC",
  },
});
export default StartScreen;
