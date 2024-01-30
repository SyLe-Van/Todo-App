import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal! "
          onChangeText={goalsInputHandler}
          value={enteredGoalsText}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
