  import './App.css';
  import Chatting from './Components/Chatting/Chatting'
  function App() {

    function Sumtion(num1:number,num2:number,OutPut:(num:number)=>void){
      const Result=num1+num2;
      OutPut(Result)
    }
    Sumtion(10,5,(resulit)=>{
      console.log(resulit)
    })
    return (
      <div className="My-App">
      <Chatting/>
      </div>
    );
  }

  export default App;
