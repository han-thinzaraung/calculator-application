
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setResult] = useState('');
  const [error,setError] = useState({
    first : false,
    second :false
  })
  const calSum = () => {
    if(!num1){
      setError(err => ({...err, first : true }) );
      setResult('');
    }
    if(!num2){
      setError(err => ({...err, second : true }) );
      setResult('');
    }
    if(num1 && num2){
      let Add = parseInt(num1) + parseInt(num2);
      // console.log(typeof(Add));
      setResult(parseInt(Add));
    }
    }
    const calSubstract = () => {
      if(!num1){
        setError(err => ({...err, first : true }) );
        setResult('');
      }
      if(!num2){
        setError(err => ({...err, second : true }) );
        setResult('');
      }
      if(num1 && num2){
        if((+num1) >= (+num2)) {
          setResult(num1 - num2);
      } else {
          setResult("Number 1 must be larger than Number 2");
        
      }
      }
    }
    const calMultiply = () => {
      if(!num1){
        setError(err => ({...err, first : true }) );
        setResult('');
      }
      if(!num2){
        setError(err => ({...err, second : true }) );
        setResult('');
      }
        if(num1 && num2 ) {
          setResult(num1 * num2);
      }

    }
    const calDivide = () => {
      if(!num1){
          setError(err =>({...err, first : true}));
          setResult("");
      } 
      if(!num2) {
          setError(err =>({...err, second : true}));
          setResult("");
      }
      if(num1 && num2 ) {
          if(+num2 !== 0)
          {
              setResult(num1/num2);
          } else {
              setResult("Divider must not be Zero");
          }
      }
  
}


  const inputMustNum = (e) =>  {
    if(!(/[0-9]+/.test(e.key)) && (e.key !== "Backspace")) e.preventDefault();
  }

    return (
      <div className="App card ">
        <div className="col-md-4 mx-auto card-body p-5 shadow">
          <h2 className='center text-primary'>Sum Calculator</h2>
            <div>
              <label>Number 1</label>
              <input type='text' placeholder='Enter Number 1' value={num1} onKeyDown={inputMustNum}
              onChange={(e) => {
                setNum1(e.target.value)
                setError({...error, first : false})
                }
              }
               />
                <small className="text-danger">{error.first ?"First Number is required" : ""}</small>
            </div>
            <div>
              <label>Number 2</label>
              <input type='text' placeholder='Enter Number 2' value={num2} onKeyDown={inputMustNum}
              onChange={(e) => {
                setNum2(e.target.value)
                setError({...error, second : false})
                }
              }
               />
                <small className="text-danger">{error.second ?"Second Number is required" : ""}</small>
            </div>
            <div className='d-flex justify-content-around'>
            <div>
              <button className ="btn  btn-outline-primary" type="button" onClick = {calSum}>Sum</button>
            </div>
            <div>
              <button className ="btn  btn-outline-primary" type="button" onClick = {calSubstract}>Substract</button>
            </div>
            <div>
              <button className ="btn  btn-outline-primary" type="button" onClick = {calMultiply}>Multiply</button>
            </div>
            <div>
              <button className ="btn  btn-outline-primary" type="button" onClick = {calDivide}>Divide</button>
            </div>
            </div>
           
            <div className='center text-primary'>
              <h5>Result : {result} </h5>
            </div>
        </div>
      </div>

    );
  
  }


export default App;
