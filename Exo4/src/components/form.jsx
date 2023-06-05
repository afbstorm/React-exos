import Inputs from "./inputs";
import Operators from "./operators";
import { useState } from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  const [values, setValues] = useState({
    firstNum: 0,
    secondNum: 0,
    operator: "",
    result: 0,
  });


  const { title } = props;
  const operators = ["+", "-", "/", "*"];

  const handleChanges = (inputName, val) => {
    setValues((prevValues) => ({ ...prevValues, [inputName]: val }));
  };

  const handleCalculation = (e) => {
    e.preventDefault()
    const { firstNum, secondNum, operator } = values;

    if(firstNum != "" && secondNum != "" && operator != "") {
        let result;
        const num1 = parseInt(firstNum);
        const num2 = parseInt(secondNum)
        switch(operator) {
            case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "";
        }
        setValues((prevValues) => ({...prevValues, result: result}))
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <form>
        <Inputs
          type={"number"}
          name={"First number"}
          setValues={(val) => handleChanges("firstNum", val)}
          value={values.firstNum}
        />

        <Operators
          name={"Operator"}
          setValues={(val) => handleChanges("operator", val)}
          operators={operators}
          value={values.operator}
        />

        <Inputs
          type={"number"}
          name={"Second number"}
          setValues={(val) => handleChanges("secondNum", val)}
          value={values.secondNum}
        />

        <Inputs
          type={"number"}
          name={"Result"}
          setValues={(val) => handleChanges("result", val)}
          value={values.result}
          disabled={true}
        />

        <button onClick={handleCalculation}>Calculate</button>
      </form>
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
};

export default Form;
