import React ,{useState}from 'react';
import './Product.css'
const Product = () => {
    const[Pid,setPid]=useState('');
    const[Pname,setPname]=useState('');
    const[Price,setPrice]=useState('');
    const[Quantity,setQuantity]=useState('');

    const readpid =(event)=>{
        setPid(event.target.value);
        console.log(event.target.value)
    }
    const readpname =(event)=>{
        setPname(event.target.value);
        console.log(event.target.value)
    }
    const readprice =(event)=>{
        setPrice(event.target.value);
        console.log(event.target.value);
    }
        const readquantity =(event)=>{
        setQuantity(event.target.value);
        console.log(event.target.value)
    }

  return (
    <div>
      <h1 className='po'> product </h1>
      <form>
        product id:<input type='text' onChange={readpid}></input><br/><br/>
        Name     :<input type='text' onChange={readpname}></input><br/><br/>
        price    :<input type='text' onChange={readprice}></input><br/><br/>
        Quantity  :<input type='number' onChange={readquantity}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
  }
  


export default Product
