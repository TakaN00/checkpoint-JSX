
import './App.css';
import './style.css';
import imageSrc from "./imageInSrc.jpg";
import myVideo from  "./myVideo.mp4";

function App() {
  return (
    <div className="App">
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className='title red'>What's my name ?!</h1>

<br/>

<img src={imageSrc}/>

<br/>

<img src="/imageInPublic.jpg"/>

</div>

<video width="320" height="240" controls loop>

<source src={myVideo} type="video/mp4"/>

</video>
    </div>
  );
}

export default App;
