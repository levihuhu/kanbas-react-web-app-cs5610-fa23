import VariablesAndConstants from "./Variables and Constants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";    
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction.js";
import JsonStringify from "./JsonStringify.js";
import FindFunction from "./FindFunction.js";
import TemplateLiterals from "./TemplateLiterals.js";
import House from "./House.js";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript(){
    console.log("JavaScript");
    return (
        <div>
       <h3>JavaScript</h3>
         <FunctionDestructing/>
         <Destructing/>
         <Spread/>
        <House/>
        <TemplateLiterals/>
       <FindFunction/>
       <JsonStringify/>
       <MapFunction/>
       <ForLoops/>
       <AddingAndRemovingDataToFromArrays/>
       <ArrayIndexAndLength/>
       <WorkingWithArrays/>
       <FunctionParenthesisAndParameters/>
       <ImpliedReturn/>
       <ArrowFunctions/>
       <ES5Functions/>
       <TernaryOperator/>
       <IfElse/>
       <BooleanVariables/>
        <VariablesAndConstants/>
        <VariableTypes/>
        </div>
    );
}
export default JavaScript;