import "./App.css";
import R003ImportComponent from "./R003_ImportComponent";
import R004LifecycleEx from "./R004_LifecycleEx";
import R005Constructor from "./R005Constructor";
import R006LifecycleEx from "./R006_LifecycleEx";
import R007Lifecycleex from "./R007_Lifecycleex";
import R008Lifecycleex from "./R008_LifecycleEx";
import R009Es6 from "./R009_Es6";
function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>HTML적용</p>
      {/* <R003ImportComponent></R003ImportComponent> */}
      {/* <R004LifecycleEx></R004LifecycleEx> */}
      {/* <R005Constructor></R005Constructor> */}
      {/* <R006LifecycleEx prop_value="FromApp.js"></R006LifecycleEx> */}
      {/* <R007Lifecycleex prop_value="FromApp.js"></R007Lifecycleex> */}
      <R008Lifecycleex prop_value="FromApp.js"></R008Lifecycleex>
      <R009Es6></R009Es6>
    </div>
  );
}

export default App;
