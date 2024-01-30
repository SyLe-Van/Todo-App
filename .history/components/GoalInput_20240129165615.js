import { StyleSheet, View, TextInput } from "react-native";
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal! "
        onChangeText={goalsInputHandler}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
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
