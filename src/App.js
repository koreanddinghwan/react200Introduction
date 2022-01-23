import "./App.css";

import R023Propschild from "./beginning/R023Propschild";
import R024State from "./beginning/R024State";
import R025SetState from "./beginning/R025SetState";
import R026ForceUpdate from "./beginning/R026ForceUpdate";
import R027ClassCompo from "./beginning/R027ClassCompo";
import R028Purecompo from "./beginning/R028Purecompo";
import R029ShallowEq from "./beginning/R029ShallowEq";

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>HTML적용</p>

      <R024State reactString={"react"}></R024State>
      <R025SetState></R025SetState>
      <R026ForceUpdate></R026ForceUpdate>
      <R027ClassCompo></R027ClassCompo>
      <R028Purecompo></R028Purecompo>
      <R029ShallowEq></R029ShallowEq>
    </div>
  );
}

export default App;
