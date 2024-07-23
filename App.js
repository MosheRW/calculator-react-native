import React, { Component } from "react";

import { Dimensions, SafeAreaView, StyleSheet, Text, View, css } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

import style from './App.module.css';


// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
        
      //<View style={styles.add("container")}>
      
      <View style={styles.container}>
        {/* Status bar here */}
        <SafeAreaView>
        <Text style={stateSize(this.state.currentValue)}>  
            
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button text="C" onPress={() => this.HandleTap("clear")}
              theme="leftButton"
             />
            <Button text="+-" onPress={() => this.HandleTap("posneg")} />
            <Button text="%" onPress={() => this.HandleTap("percentage")} />
            <Button text="/" onPress={() => this.HandleTap("operator", "/")}   
              theme="rightButton"
             />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} 
              theme="leftButton"
             />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button text="X" onPress={() => this.HandleTap("operator", "*")}
              theme="rightButton"
             />
          </Row>

          <Row>
            <Button text="5" onPress={() => this.HandleTap("number", 5)}
              theme="leftButton"
             />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button
              text="-" onPress={() => this.HandleTap("operator", "-")}            
              theme="rightButton"
             />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)}
              theme="leftButton"
             />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button text="+" onPress={() => this.HandleTap("operator", "+")}
              theme="rightButton"             
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.HandleTap("number", 0)} 
              theme="leftButton"
             />           
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              size="double"
              onPress={() => this.HandleTap("equal", "=")}
              theme="rightButton"
             />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}



// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
const screenHeight = screen.height;

const fromTop = screenHeight - (6.5 * buttonWidth ) - 2;


// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333B48",
    justifyContent: "flex-end",    
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: fromTop,

  },
  value: {
    color: "#fff",
    backgroundColor: "#009C55",
    textAlign: "right",
    fontSize: 100,
    margin: 10,
    marginBottom: 10,    
    borderRadius: 12,
    height: 1.5 *  buttonWidth,
    
  },
  valuesmaller: {
    color: "#fff",
    backgroundColor: "#009C55",
    textAlign: "right",
    fontSize: 50,
    margin: 10,
    marginBottom: 10,    
    borderRadius: 12,
    height: 1.5 *  buttonWidth,
  },
});


function stateSize(number){

  return  number > 100000 ? styles.valuesmaller : styles.value;
}