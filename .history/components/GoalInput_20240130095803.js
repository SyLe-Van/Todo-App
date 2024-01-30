import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalsText, setEnteredGoalsText] = useState("");

  function goalsInputHandler(enteredText) {
    setEnteredGoalsText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalsText);
    setEnteredGoalsText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal! "
          onChangeText={goalsInputHandler}
          value={enteredGoalsText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "orange",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#ffffff",
    width: "90%",
    height: 50,
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
