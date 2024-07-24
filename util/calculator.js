
export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,

};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return {  currentValue: `${value}`} ;            
  }
  if (state.operator !== null) 
      state.currentValue = value;
      return handleEqual(state);        
  
  return { currentValue: `${state.currentValue}${value}` };
  
};

const handleEqual = (state) => {
  
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,     
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: (previous / current) === Infinity || (previous / current) === -Infinity ? Infinity * 0: `${previous / current}` ,
        ...resetState,
      };

    default:
      return state;
  }
};


const handleOperator = (value, state) => {
  return (state.operator === null) ? "0" : state.currentValue + state.previousValue;

};

// calculator function
const calculator = (type, value, state) => {

  
  switch (type) {
    case "number":      
      console.log(value, state);
      return handleNumber(value, state); //handleEqual(state)
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "operator":
      
      console.log(value, state);
      console.log(state.operator === null);
      console.log(state.currentValue ,state.previousValue);
      return {
        previousValue:  (state.operator === null) ? "0" : `${parseFloat(state.currentValue) + parseFloat(state.previousValue)}`,
        operator: value,
        previousValue: state.currentValue,      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;
