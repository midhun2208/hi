
import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';



function App() {
  const [amount,setAmount] = useState('')
  const [discount,setDiscount] = useState('')
  const [save,setSaved] = useState('')
  const [offer,setOffer] = useState('')
  const calculate = e =>{
    let result = (discount/100)*amount
    
    setSaved(result)
    setOffer(amount-result)
  }
  function reset(){
    setAmount('')
    setDiscount('')
    setOffer(0)
    setSaved(0)
  }

  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 col-md-12 cards ">
                <h1 className='head'>Discount Calculator</h1>
                <div className="inputs">
                <TextField id="filled-basic" onChange={e=> setAmount(e.target.value)} label="Amount" variant="filled"  type='number' className='my-3 ' value={amount}/><br />
                <TextField id="filled-basic"  onChange={e=> setDiscount(e.target.value)} label="Discount in %" variant="filled" type='number' className=''value={discount} />
                </div>
                <div className="buttons">
                  <button className='btn btn-success my-3 mx-2' onClick={calculate}>Calculate</button>
                  <button className='btn btn-danger my-3 mx-2' onClick={reset}>Reset</button>
                </div>
                <div className="card-2">
                  <div className='card2 '>
                    <h3>You Saved:&#x20B9;{save} </h3>
                    <h3> OffcerPrice: &#x20B9;{offer}</h3>

                  </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
    </div>
  );
}

export default App;
