import "./App.css";
import Description from "./component/Description";
import Name from "./component/Name";
import Price from "./component/Price";
import Image from "./component/Image";
import  Card  from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";

const firstname = "J.Dennoun";

function App() {
  return (
    <div className="App">
      <Card className="card" style={{ width: "50rem" }}>
        <Image className='img' />
        <Name className='name'/>
        <Description className="description"/>
        <Button variant="primary" style={{ width: "6rem" }}><Price /></Button>
        
      </Card>

      <div>
        {firstname ? <h1>Hello, {firstname}!</h1> : <h1>Hello there!</h1>}
        {firstname ? <img src="/tof.jpg" alt="random" /> : <></>}
      </div>
    </div>
  );
}

export default App;
