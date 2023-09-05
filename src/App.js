import "./styles.css";
import Reactions from './Reactions';

export default function App() {
  return (
    <div className="App">
      <h1>React Reactions</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="" style={{display:'flex', justifyContent:'center'}}>
        <Reactions/>
      </div>
    </div>
  );
}
