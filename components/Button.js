import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === "leftButton") {
    buttonStyles.push(styles.leftButton);
  } 
  else if (theme === "rightButton") {
    buttonStyles.push(styles.rightButton);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EC00D0", 
    flex: 1,
    height: Math.floor(buttonWidth -15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
    marginBottom: 10,
    marginTop: 0,
    
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    backgroundColor: "#FF0006",
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "center",    
  },

 leftButton: {
    marginLeft: 10
  }, 
  rightButton: {
    marginRight: 10
  },
});
