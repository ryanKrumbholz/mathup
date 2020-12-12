import { string } from "random-js";

const topicReducer = (state, action) => {
  console.log("action type", action.type)
  switch (action.type) {
    default:
      state = '';
      break;
    case 'addition':
      state = 'addition';
      break;
    case 'additionOnes':
      state = 'additionOnes';
      break;
    case 'additionTens':
      state = 'additionTens';
      break;
    case 'subtraction':
      state = 'subtraction';
      break;
    case 'subtractionOnes':
      state = 'subtractionOnes';
      break;
    case 'subtractionTens':
      state = 'subtractionTens';
      break;
    case 'multiply': 
      state = 'multiply';
      break;
    case 'multiplyOnes': 
      state = 'multiplyOnes';
      break;
    case 'multiplyTens': 
      state = 'multiplyTens';
      break;
    case 'divide':
      state = 'divide';
      break;
    case 'divideOnes':
        state = 'divideOnes';
        break;
    case 'divideTens':
        state = 'divideTens';
        break;
  }
  return state;
}
  
export default topicReducer;